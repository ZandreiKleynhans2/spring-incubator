export interface Flight {
    id : number,
    flightNumber : String,
    origin : String,
    destination : String,
    departureTime : Date,
    arrivalTime : Date,
    seatsAvailable : number,
    seatCost : number
}