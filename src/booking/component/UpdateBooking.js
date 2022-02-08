import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Passenger from "../../passenger/model/passenger";
import Booking from "../model/booking";
import BookingService from "../service/BookingService";

function UpdateBooking() {
    const navigate= useNavigate();
    const service = new BookingService();

    const { bookingId } = useParams();
    const[state, changeState] = React.useState({booking: new Booking()});

    const[clicked, changeClicked] = React.useState(false);

    const[scheduleFlightId, changeScheduleFlightId] = React.useState();
    const[numOfPassengers, changeNumOfPassengers] = React.useState();

    const[pnrNumber1, changePnrNumber1] = React.useState();
    const[passengerName1, changePassengerName1] = React.useState();
    const[passengerAge1, changePassengerAge1] = React.useState();
    const[passengerUIN1, changePassengerUIN1] = React.useState();
    const[luggage1, changeLuggage1] = React.useState();

    const[pnrNumber2, changePnrNumber2] = React.useState();
    const[passengerName2, changePassengerName2] = React.useState();
    const[passengerAge2, changePassengerAge2] = React.useState();
    const[passengerUIN2, changePassengerUIN2] = React.useState();
    const[luggage2, changeLuggage2] = React.useState();

    const[pnrNumber3, changePnrNumber3] = React.useState();
    const[passengerName3, changePassengerName3] = React.useState();
    const[passengerAge3, changePassengerAge3] = React.useState();
    const[passengerUIN3, changePassengerUIN3] = React.useState();
    const[luggage3, changeLuggage3] = React.useState();

    const [condition, changeCondition] = React.useState('');

    React.useEffect(()=>{
        service.getBooking(bookingId).then((data)=>{
            changeState({booking: data.data});
        }).catch(()=>{
            alert("Problem in getting booking data")
        });
    }, []);
    return(
        <div className="my-4">
            <form>
                <h2><span className='badge badge-dark px-4 py-2'>Update Ticket</span></h2>
                <div className='form-group'>
                    <label>Booking Id</label>
                    <input className="form-control" type="text" id="bookingId" name="bookingId"
                    value = {bookingId}
                    readOnly
                    />
                </div>
                <div className="form-row">
                    <div className='col'>
                        <label>User Id</label>
                        <input className="form-control" type="text" id="userId" name="userId" placeholder="Enter user Id"
                        value = {sessionStorage.getItem('userId')}
                        readOnly
                        />
                    </div>
                    <div className='col'>
                        <label>Scheduled Flight Id</label>
                        <input className="form-control" type="text" id="scheduleFlightId" name="scheduleFlightId" placeholder="Enter schedule flight Id"
                        value = {state.booking.flight.scheduleFlightId}
                        readOnly
                        />
                    </div>
                </div>
                
                
                <button className="btn btn-warning my-3" onClick={(event)=>{
                    event.preventDefault();
                    changeNumOfPassengers(state.booking.passengerList.length);
                    if(state.booking.passengerList.length>0){
                        changePnrNumber1(state.booking.passengerList[0].pnrNumber);
                        changePassengerName1(state.booking.passengerList[0].passengerName);
                        changePassengerAge1(state.booking.passengerList[0].passengerAge);
                        changePassengerUIN1(state.booking.passengerList[0].passengerUIN);
                        changeLuggage1(state.booking.passengerList[0].luggage);
                    }
                    if(state.booking.passengerList.length>1){
                        changePnrNumber2(state.booking.passengerList[1].pnrNumber);
                        changePassengerName2(state.booking.passengerList[1].passengerName);
                        changePassengerAge2(state.booking.passengerList[1].passengerAge);
                        changePassengerUIN2(state.booking.passengerList[1].passengerUIN);
                        changeLuggage2(state.booking.passengerList[1].luggage);
                    }
                    if(state.booking.passengerList.length>2){
                        changePnrNumber3(state.booking.passengerList[2].pnrNumber);
                        changePassengerName3(state.booking.passengerList[2].passengerName);
                        changePassengerAge3(state.booking.passengerList[2].passengerAge);
                        changePassengerUIN3(state.booking.passengerList[2].passengerUIN);
                        changeLuggage3(state.booking.passengerList[2].luggage);
                    }
                    changeClicked(true);
                }}>Update Passengers</button>

                {clicked ? (
                    <div className="form-row my-2">
                        <div className='col'>
                            <label>Booking Date</label>
                            <input className="form-control" type="text" id="bookingDate" name="bookingDate" placeholder="Enter booking date"
                            value = {state.booking.bookingDate}
                            readOnly
                            />
                        </div>
                        <div className='col'>
                            <label>Ticket Cost</label>
                            <input className="form-control" type="text" id="ticketCost" name="ticketCost" placeholder="Enter ticket cost"
                            value = {1000 * numOfPassengers}
                            readOnly
                            />
                        </div>
                    </div>
                ) : null}
                
                {clicked ? (
                    <div className="form-group mt-4">
                        <label>Number of passengers</label>
                        <select class="form-control" id="numberOfPassengers"
                        value = {numOfPassengers}
                        onChange = {(event)=>{
                            changeNumOfPassengers(event.target.value);
                            if(event.target.value===0){
                                changeClicked(false);
                            }else{
                                changeClicked(true);
                            }
                        }}>
                            <option value={0}>Choose number of passengers</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </div>
                ) : null}
                
                {numOfPassengers>0 && clicked ? (
                    <div className="border p-3 mt-4 mb-2">
                        <label className="mb-4"><b><u>Passenger 1 Data</u></b></label>
                        <div className='form-group'>
                            <label>Passenger Name</label>
                            <input className="form-control" type="text" id="passengerName" name="passengerName" placeholder="Enter passenger name"
                            value = {passengerName1}
                            onChange={(event)=>changePassengerName1(event.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label>Passenger Age</label>
                                <input className="form-control" type="text" id="passengerAge" name="passengerAge" placeholder="Enter passenger age"
                                value = {passengerAge1}
                                onChange={(event)=>changePassengerAge1(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label>Passenger UIN</label>
                                <input className="form-control" type="text" id="passengerUIN" name="passengerUIN" placeholder="Enter passenger UIN"
                                value = {passengerUIN1}
                                onChange={(event)=>changePassengerUIN1(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label>Luggage</label>
                                <input className="form-control" type="text" id="luggage" name="luggage" placeholder="Enter luggage"
                                value = {luggage1}
                                onChange={(event)=>changeLuggage1(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                ) : null}

                {numOfPassengers>1 && clicked ? (
                    <div className="border p-3 mt-4 mb-2">
                        <label className="mb-4"><b><u>Passenger 2 Data</u></b></label>
                        <div className='form-group'>
                            <label>Passenger Name</label>
                            <input className="form-control" type="text" id="passengerName" name="passengerName" placeholder="Enter passenger name"
                            value = {passengerName2}
                            onChange={(event)=>changePassengerName2(event.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label>Passenger Age</label>
                                <input className="form-control" type="text" id="passengerAge" name="passengerAge" placeholder="Enter passenger age"
                                value = {passengerAge2}
                                onChange={(event)=>changePassengerAge2(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label>Passenger UIN</label>
                                <input className="form-control" type="text" id="passengerUIN" name="passengerUIN" placeholder="Enter passenger UIN"
                                value = {passengerUIN2}
                                onChange={(event)=>changePassengerUIN2(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label>Luggage</label>
                                <input className="form-control" type="text" id="luggage" name="luggage" placeholder="Enter luggage"
                                value = {luggage2}
                                onChange={(event)=>changeLuggage2(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                ) : null}

                {numOfPassengers>2 && clicked ? (
                    <div className="border p-3 mt-4 mb-2">
                        <label className="mb-4"><b><u>Passenger 3 Data</u></b></label>
                        <div className='form-group'>
                            <label>Passenger Name</label>
                            <input className="form-control" type="text" id="passengerName" name="passengerName" placeholder="Enter passenger name"
                            value = {passengerName3}
                            onChange={(event)=>changePassengerName3(event.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label>Passenger Age</label>
                                <input className="form-control" type="text" id="passengerAge" name="passengerAge" placeholder="Enter passenger age"
                                value = {passengerAge3}
                                onChange={(event)=>changePassengerAge3(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label>Passenger UIN</label>
                                <input className="form-control" type="text" id="passengerUIN" name="passengerUIN" placeholder="Enter passenger UIN"
                                value = {passengerUIN3}
                                onChange={(event)=>changePassengerUIN3(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <label>Luggage</label>
                                <input className="form-control" type="text" id="luggage" name="luggage" placeholder="Enter luggage"
                                value = {luggage3}
                                onChange={(event)=>changeLuggage3(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                ) : null}

                {clicked ? (<button className="btn btn-primary" onClick={(event)=>{
                    event.preventDefault();
                    let newPassengerList = [];
                    if(numOfPassengers>0){
                        let passenger1 = new Passenger();
                        passenger1.passengerName = passengerName1;
                        passenger1.passengerAge = passengerAge1;
                        passenger1.passengerUIN = passengerUIN1;
                        passenger1.luggage = luggage1;
                        newPassengerList.push(passenger1);
                    }
                    if(numOfPassengers>1){
                        let passenger2 = new Passenger();
                        passenger2.passengerName = passengerName2;
                        passenger2.passengerAge = passengerAge2;
                        passenger2.passengerUIN = passengerUIN2;
                        passenger2.luggage = luggage2;
                        newPassengerList.push(passenger2);
                    }
                    if(numOfPassengers>2){
                        let passenger3 = new Passenger();
                        passenger3.passengerName = passengerName3;
                        passenger3.passengerAge = passengerAge3;
                        passenger3.passengerUIN = passengerUIN3;
                        passenger3.luggage = luggage3;
                        newPassengerList.push(passenger3);
                    }
                    changeScheduleFlightId(state.booking.flight.scheduleFlightId);
                    let newBooking = new Booking();
                    newBooking.bookingDate = state.booking.bookingDate;
                    newBooking.passengerList = newPassengerList;
                    newBooking.ticketCost = numOfPassengers * 1000;
                    service.deleteBooking(state.booking.bookingId).then(()=>{
                        service.bookTicket(newBooking, sessionStorage.getItem('userId'), state.booking.flight.scheduleFlightId).then(()=>{
                            alert("Booking updated!");
                            navigate("/booking/view");
                        }).catch(()=>{
                            alert("Problem in booking tickets")
                        })
                    }).catch(()=>{
                        alert("Problem in deleting booking.");
                    });
                }}>Update Booking</button>) : null}
            </form>
        </div>
    );
}

export default UpdateBooking;