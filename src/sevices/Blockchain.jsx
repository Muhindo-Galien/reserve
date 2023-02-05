import Web3 from 'web3'
import { toast } from 'react-hot-toast'
import {getGlobalState, setGlobalState} from "../store/index"
import abi from "../abis/TicketBooking.json"
export const contractAddress ='0x5FbDB2315678afecb367f032d93F642f64180aa3'

const { ethereum } = window
window.web3 = new Web3(ethereum)
window.web3 = new Web3(window.web3.currentProvider)

const connectWallet = async () => {
  try {
    if (!ethereum) return console.log('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
  } catch (error) {
    console.log(error.message)
  }
}

const isWallectConnected = async () => {
  try {
    if (!ethereum) return console.log('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_accounts' })
    
    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload()
    })
    
    window.ethereum.on('accountsChanged', async () => {
      setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
      await isWallectConnected()
    })
    
    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
    } else {
      toast.error('Please install Metamask')
     
      setGlobalState('connectedAccount','')

    }
  } catch (error) {
    reportError(error)
  }
}

const getEtheriumContract = async () => {
  const connectedAccount = getGlobalState('connectedAccount')

  if (connectedAccount) {
    const web3 = window.web3
      const contract = new web3.eth.Contract(abi.abi, contractAddress)
      setGlobalState('contract',await contract)
      console.log(contract);
      return contract
  } else {
    return getGlobalState('contract')
  }
}

const addTicket= async()=>{
  try {
    const sender = getGlobalState('connectedAccount')
    const listFee = window.web3.utils.toWei('0.5', 'ether');
    if(sender){
      const contract = await getEtheriumContract();
      const vipTickePrice =  window.web3.utils.toWei('5', 'ether');
      const silverTickePrice =  window.web3.utils.toWei('10', 'ether');

      toast.success('Transfer started...')
      setGlobalState('started',true)

      const tx= await contract.methods.addEvent(
        vipTickePrice,silverTickePrice,2,1,"AU graduatio"
      ).send({ from: sender, value: listFee })

      toast.success('Token sent successfully')
      window.location.reload()
      setGlobalState('started',false)
    }
  } catch (error) {
    console.log(error);
  }
}

const structuredEvent=(events)=>{
  return(
    events?.map((item)=>({
      eventId: item.eventId,
      eventTitle:item.eventTitle,
      eventOwner: (item.eventOwner).toLowerCase(),
      vipTicketCount:item.vipTicketCount,
      ticketCount:item.ticketCount,
      silverTicketPrice: window.web3.utils.fromWei(item.silverTicketPrice),
      vipTicketPrice: window.web3.utils.fromWei(item.vipTicketPrice),
      eventDate:item.eventDate,
      tickets:item.tickets?.map((el)=>({
        category:el.category,
        eventDate:el.eventDate,
        eventId:el.eventId,
        eventTitle:el.eventTitle,
        ticketId:el.ticketId,
        ticketPrice:el.ticketPrice
      })),
      passed:item.passed,

    }))
  ).reverse()
}

const getContractAllEvents= async()=>{
  try {
    const sender = getGlobalState('connectedAccount')
    if(sender){
      const contract = await getEtheriumContract();
      const events = await contract.methods.getAllEvents().call()
      setGlobalState('allEvents',structuredEvent(events));
    }
    else{
      console.log('Please, Connect Your MetaMask Wallet!');
    }
  }catch(error){
    console.log(error);
  }
}

const getEvent=async(id)=>{
  const account = getGlobalState('connectedAccount')
  if(account){
    try {
      const contract = await getEtheriumContract()
      const eventDetails = await contract.methods.getSignleEvent(id).call()
      const singleEventData=({
        eventId: eventDetails.eventId,
        eventTitle:eventDetails.eventTitle,
        eventOwner: (eventDetails.eventOwner).toLowerCase(),
        vipTicketCount:eventDetails.vipTicketCount,
        ticketCount:eventDetails.ticketCount,
        silverTicketPrice: window.web3.utils.fromWei(eventDetails.silverTicketPrice),
        vipTicketPrice: window.web3.utils.fromWei(eventDetails.vipTicketPrice),
        eventDate:eventDetails.eventDate,
        tickets:eventDetails.tickets?.map((el)=>({
          category:el.category,
          eventDate:el.eventDate,
          eventId:el.eventId,
          eventTitle:el.eventTitle,
          ticketId:el.ticketId,
          ticketPrice:window.web3.utils.fromWei(el.ticketPrice)
        })),
        passed:eventDetails.passed,
      });
      setGlobalState('eventDetails',(singleEventData));

      const silverTickets=(singleEventData.tickets.filter((item) => item.category === "Silver"));
      const vipTickets=(singleEventData.tickets.filter((item) => item.category === "VIP"));
      setGlobalState('silverTickets',silverTickets)
      setGlobalState('vipTickets',vipTickets)
    } catch (error) {
      console.log(error);
    }
  }
}

const purchaseTicket = async(tikectid,ticketPrice)=>{
  const account = getGlobalState('connectedAccount')
  ticketPrice=window.web3.utils.toWei(ticketPrice.toString(), 'ether')
  if(account){
    try {
      const contract = await getEtheriumContract();
      toast.success("Purchase initiated...")
      await contract.methods.buyTicket(tikectid).send({ from: account,value: ticketPrice})
    } catch (error) {
      toast.error('Purchase failed!')
      console.log(error);
    }
  }
  else{
    console.log("Please Connect MetaMask Wallet");
  }
}

const getMyTickets = async()=>{
  const account = getGlobalState('connectedAccount')
  if(account){
    const contract = await getEtheriumContract();
    try {
      // create an empty array that will contain every ticket purchased
      const allMyTickets=[]
      // assign the orderCount to the variable counter 
      const counter=await  contract.methods.orderCount(account).call()
    
      for(let i =0; i<counter;i++){
        const ticket = await contract.methods.myOrders(account,counter).call();
        allMyTickets.push(ticket)
      }
      console.log('allMyTickets',allMyTickets);
    } catch (error) {
      console.log('error');
    }
  }
}
const getMyEvents = async()=>{
  const account = getGlobalState('connectedAccount')
  if(account){
    const contract = await getEtheriumContract();
    try {
      // const allMyEvents=async()=>{
      //   const myEvents = await contract.methods
      // }
    } catch (error) {
      console.log(error);
    }
  }
}

export {
  connectWallet,
  isWallectConnected,
  getEtheriumContract,
  addTicket,
  getContractAllEvents,
  getEvent,
  purchaseTicket,
  getMyTickets
}