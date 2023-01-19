import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Chip,
    IconButton,
    Typography,
    Input,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { useLocation } from "react-router-dom";

import moment from "moment";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";

// components

const ariaLabel = { "aria-label": "description" };

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});


function DownloadPdf() {
    const location = useLocation();
    const bookingInfo = location.state.bookingInfo
    const data = location.state.data;
    const billingInfo = location.state.billingInfo;
    const travelInfo = location.state.travelInfo;

    return (

        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Box className="px-16 pb-52">
                            <Box className="py-10">
                                <Box className="flex justify-between items-center pb-8">
                                    {/* <img src="https://static.goindigo.in/content/dam/indigov2/6e-website/downloadapp/Feature-Image.png" className="w-28 rounded-lg h-16" /> */}
                                    <img src="https://www.hms-travel.com/images/logo.png" className="w-42  rounded-lg h-16" />

                                </Box>
                                <Typography
                                    variant="inherit"
                                    fontSize={30}
                                    className="font-semibold"
                                >
                                    E-Ticket
                                </Typography>
                                <Typography
                                    variant="inherit"
                                    className=" flex items-center font-medium"
                                >
                                    Booking ID :

                                    <span
                                        className="text-gray-500 ml-2"
                                    >
                                        {bookingInfo.bookingId}
                                    </span>


                                </Typography>
                                <Typography variant="inherit" className="font-medium">
                                    Booked on:

                                    <span
                                        className="text-gray-500"
                                    >
                                        {bookingInfo.bookingTime &&
                                            moment(bookingInfo.bookingTime).format("DD MMM YYYY, h:mm a")}
                                    </span>


                                </Typography>
                            </Box>

                            <Box className="flex justify-between items-center">
                                <Typography
                                    variant="inherit"
                                    className="justify-start font-medium text-2xl text-black-600"
                                >Flight Details</Typography>

                            </Box>
                            {[...Array(data.length)].map((item, i) => (
                                <>
                                    <Box className="flex justify-between items-center border-b-2 py-2 my-10 border-indigo-600">
                                        <Box className="flex justify-center items-center">
                                            <FlightTakeoffOutlinedIcon
                                                fontSize="large"
                                                className="mr-5 text-gray-500"
                                            />
                                            <Box>

                                                <Typography
                                                    variant="inherit"
                                                    className="font-medium text-slate-400 capitalize"

                                                >
                                                    {data[i].Onward_Flight} Flight
                                                </Typography>

                                                <Typography
                                                    variant="inherit"
                                                    className="font-medium text-2xl text-indigo-600 flex items-center"
                                                >

                                                    <span
                                                        className="pr-2 capitalize"

                                                    >
                                                        {data[i].Onward_Flight_start}
                                                    </span>

                                                    to

                                                    <span
                                                        className="pl-2 capitalize"

                                                    >
                                                        {data[i].Onward_Flight_end}
                                                    </span>

                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="inherit"
                                                className="font-medium text-right"
                                            >
                                                PNR
                                            </Typography>

                                            <Typography
                                                variant="inherit"
                                                className="font-medium text-2xl text-indigo-600 uppercase"

                                            >
                                                {data[i].pnv}
                                            </Typography>

                                        </Box>
                                    </Box>

                                    <Box className="pt-1">
                                        <Box className="flex justify-between">
                                            <Box className="flex items-center">
                                                <img
                                                    src="https://store-images.s-microsoft.com/image/apps.20234.13510798882805050.f0f26ef0-0503-4e1c-aee5-7144b279f54e.b4e5d5ef-478b-4e19-a9a4-c78e895612a6?mode=scale&q=90&h=200&w=200&background=%23464646"
                                                    alt="airline"
                                                    className="w-10 h-10 rounded-lg mr-2"
                                                />
                                                <Typography
                                                    variant="inherit"
                                                    className="font-normal text-slate-400"
                                                    fontSize={20}
                                                >
                                                    IndiGo 6E-325
                                                </Typography>
                                            </Box>
                                            <Chip label="Partially refundable" variant="outlined" />
                                        </Box>
                                        <Box className="flex justify-between items-center border-b-2 pb-10">
                                            <Box>
                                                <Box>
                                                    <Typography
                                                        variant="inherit"
                                                        className=" text-xl text-slate-400 py-1"
                                                    >

                                                        <span

                                                            className="text-black font-medium mr-2"
                                                        >
                                                            {data[i].Onward_Flight_start_Code}
                                                        </span>


                                                        {
                                                            data[i].Onward_Flight_start_time &&
                                                            moment(data[i].Onward_Flight_start_time).format(
                                                                "HH:MM"
                                                            )}
                                                    </Typography>

                                                    <Typography
                                                        variant="inherit"
                                                        className="font-medium text-xl text-indigo-600"

                                                    >
                                                        {data[i].Onward_Flight_start_time}
                                                    </Typography>


                                                    <Typography
                                                        variant="inherit"
                                                        className="w-56"

                                                    >
                                                        {data[i].Onward_Flight_start_address}
                                                    </Typography>

                                                </Box>
                                            </Box>
                                            <Box className="flex justify-center flex-col items-center">
                                                <HistoryToggleOffOutlinedIcon className="my-2 text-gray-500" />

                                                <Typography
                                                    variant="inherit"
                                                    className="text-gray-500"

                                                >
                                                    {data[i].awaiting_time}
                                                </Typography>


                                                <Typography
                                                    variant="inherit"
                                                    className="text-gray-500 capitalize"

                                                >
                                                    {data[i].flight_class}
                                                </Typography>

                                            </Box>
                                            <Box>
                                                <Box className="text-right">
                                                    <Typography
                                                        variant="inherit"
                                                        className=" text-xl text-slate-400 py-1"
                                                    >
                                                        {
                                                            data[i].Onward_Flight_end_time &&
                                                            moment(data[i].Onward_Flight_end_time).format(
                                                                "HH:MM"
                                                            )}

                                                        <span

                                                            className="text-black font-medium ml-2"
                                                        >
                                                            {data[i].Onward_Flight_end_Code}
                                                        </span>

                                                    </Typography>

                                                    <Typography
                                                        variant="inherit"
                                                        className="font-medium text-xl text-indigo-600"

                                                    >
                                                        {data[i].Onward_Flight_end_time}
                                                    </Typography>



                                                    <Typography
                                                        variant="inherit"
                                                        className="w-56"

                                                    >
                                                        {data[i].Onward_Flight_end_address}
                                                    </Typography>

                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </>
                            ))}

                            {/* <div className="flex justify-between items-center border-b-2 py-2 my-10 border-indigo-600"></div> */}
                            <Box className="flex justify-between items-center mt-10">
                                <Typography
                                    variant="inherit"
                                    className="justify-start font-medium text-2xl text-black-600"
                                >Passenger Info</Typography>

                            </Box>
                            <span className="text-sm text-slate-400">
                                No of Passenger : {travelInfo.length}
                            </span>
                            {[...Array(travelInfo.length)].map((item, i) => (
                                <>
                                    <Box className="flex justify-between items-center border-b-2 py-2 my-10 border-grey-600">
                                        <Box className="flex items-center w-full">

                                            <Typography variant="inherit" className="text-sm text-slate-400" style={{ flex: ".3" }}

                                            >{travelInfo[i].name} </Typography>



                                            <Typography variant="inherit" className="text-sm text-slate-400" style={{ flex: ".3" }}

                                            >{travelInfo[i].gender} </Typography>



                                            <Typography variant="inherit" className="text-sm text-slate-400" style={{ flex: ".3" }}

                                            >{travelInfo[i].dob || "DOB"} </Typography>


                                        </Box>

                                    </Box>

                                </>
                            ))}

                            <Box className="flex justify-between items-center mt-10">
                                <Typography
                                    variant="inherit"
                                    className="justify-start font-medium text-2xl text-black-600"
                                >Billing Info</Typography>
                            </Box>
                            <Box className="flex justify-between items-center px-6 pt-8">
                                <Typography
                                    variant="inherit"
                                    className="font-medium"
                                >
                                    Name :

                                    <span
                                        className="text-gray-500 ml-2"

                                    >
                                        {billingInfo.name}
                                    </span>


                                </Typography>
                                <Typography variant="inherit" className="font-medium">
                                    Email :

                                    <span
                                        className="text-gray-500"

                                    >
                                        {billingInfo.email
                                        }
                                    </span>


                                </Typography>
                                <Typography variant="inherit" className="font-medium">
                                    Mobile No :

                                    <span
                                        className="text-gray-500"

                                    >
                                        {billingInfo.mobile
                                        }
                                    </span>


                                </Typography>
                                <Typography
                                    variant="inherit"
                                    className=" flex items-center font-medium"
                                >
                                    Card No :

                                    <span
                                        className="text-gray-500 ml-2"

                                    >
                                        {billingInfo.card}
                                    </span>


                                </Typography>
                            </Box>
                            <Box className="px-10 mt-10 pb-10 border-dotted border-2 border-indigo-600">
                                <Box className="flex justify-between items-center border-b-2 mt-10 border-grey-600">
                                    <Box >
                                        <Typography
                                            variant="inherit"
                                            className="justify-start font-medium text-base text-slate-500"
                                        >ADT Base Fare</Typography>
                                    </Box>
                                    <Box >

                                        <span
                                            className="text-gray-500 ml-2"

                                        >
                                            {billingInfo.AdtFare}
                                        </span>



                                    </Box>
                                </Box>
                                <Box className="flex justify-between mt-7 items-center border-b-2 border-grey-600">
                                    <Box >
                                        <Typography
                                            variant="inherit"
                                            className="justify-start font-medium text-base text-slate-500"
                                        >Taxes & Fees</Typography>
                                    </Box>
                                    <Box >

                                        <span
                                            className="text-gray-500 ml-2"

                                        >
                                            {billingInfo.taxes}
                                        </span>



                                    </Box>
                                </Box>
                                <Box className="flex justify-between mt-7 items-center border-b-2 border-grey-600">
                                    <Box >
                                        <Typography
                                            variant="inherit"
                                            className="justify-start font-medium text-lg text-slate-500"
                                        >Sub Total</Typography>
                                    </Box>
                                    <Box >

                                        <span
                                            className="text-gray-500 ml-2"

                                        >
                                            {billingInfo.taxes}
                                        </span>



                                    </Box>
                                </Box>
                                <Box className="flex justify-between items-center border-b-2 mt-7 border-grey-600">
                                    <Box >
                                        <Typography
                                            variant="inherit"
                                            className="justify-start font-medium text-base text-slate-500"
                                        >Traveller Assist+</Typography>
                                    </Box>
                                    <Box >

                                        <span
                                            className="text-gray-500 ml-2"

                                        >
                                            {billingInfo.travellerAssist}
                                        </span>


                                    </Box>
                                </Box>
                                <Box className="flex justify-between mt-7 items-center border-b-2 border-grey-600">
                                    <Box >
                                        <Typography
                                            variant="inherit"
                                            className="justify-start font-medium text-base text-slate-500"
                                        >Flight Monitor</Typography>
                                    </Box>
                                    <Box >

                                        <span
                                            className="text-gray-500 ml-2"

                                        >
                                            {billingInfo.flightMonitor}
                                        </span>



                                    </Box>
                                </Box>
                                <Box className="flex justify-between mt-7 items-center border-b-2 border-grey-600">
                                    <Box >
                                        <Typography
                                            variant="inherit"
                                            className="justify-start font-medium text-xl text-slate-500"
                                        >Grand Total</Typography>
                                    </Box>
                                    <Box >

                                        <span
                                            className="text-gray-500 ml-2"

                                        >
                                            {billingInfo.GrandTotal}
                                        </span>



                                    </Box>
                                </Box>

                            </Box>
                            <Box className="flex justify-between items-center mt-10">
                                <Typography
                                    variant="inherit"
                                    className="justify-start font-medium text-2xl text-black-600"
                                >Terms and Conditions</Typography>
                            </Box>
                            <Box className="bg-slate-100">
                                <p className="pt-8">
                                    <p className="pb-1"><b>TICKET POLICIES</b></p><br />
                                    Most Ticket(s) are non-refundable and non-transferable. Name changes are not allowed. All service fees are non-refundable. Prices may not include
                                    baggage fees and other services offered by the airlines. Fares are not guaranteed until ticketed. Changes to the itinerary are subject to airline policies and
                                    may involve airline penalty(s), difference in fare, taxes and administrative service fee for the agency. Passenger(s) name on the ticket must match the
                                    name as appears on the government photo I.D. for domestic travel and passport for international travel.
                                    Note: If there is an infant accompanied in the trip who will be more than 2 years of age at the time of the return flight then passenger(s) may have to pay
                                    for additional charges for upgrading the ticket to a child passenger. If due to any reasons they are not allowed to board the flight then The Travel Horse
                                    will not be responsible for it.
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b> 24 HOUR REFUND POLICY</b></p><br />
                                    As per Airline Reporting Corporation (ARC) guidelines all tickets issued with a numeric ticket number can be cancelled for refund within 24 hours of issuance
                                    but agency fees may apply.
                                    All tickets issued with a numeric ticket number which do not fall under Airline Reporting Corporation (ARC) are managed by Billing Settlement Plan (BSP)
                                    which allows the ticket(s) to be cancelled for a refund the same day before mid-night but agency fees may apply.
                                    Cancellations for Low Cost Carriers (LCC) are solely subject to airline rules & restrictions and agency fees may apply.
                                    Please note 4% of the total booking cost is the processing fee which stays non-refundable even if the booking is cancelled within 24 hours.
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b> BAGGAGE RULES AND FEES</b></p><br />
                                    Prices may not baggage fees, hence additional baggage fees may apply. Since prices may vary for different airlines, we recommend that you contact the
                                    airline you are travelling with for the accurate information regarding baggage rules, requirements and fees for the specific ticket(s) purchased.
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b>SEATS</b></p><br />
                                    If you have requested to assign a seat, we forward the request airline(s). Airline(s) may or may not be able to confirm your request which is subject to
                                    availability. We recommend you to choose our program (Travel Assist+) for specialized seat allocation assistance offered by our dedicated support team.
                                    At times airline(s) may not be able to assign specific seats or seats sitting together. Occasionally seats can be assigned only at the check in counter at the
                                    airport. Also, airlines possess the right to change any assigned seat as per their policy.
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b>VALID PHOTO ID</b></p><br />
                                    All the valid government photo I.D. should be carried by all travelers in order to board domestic flight(s). If travelling with children less than 2 years old,
                                    birth certificate is needed.
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b>PASSPORT /VISA FOR INTERNATIONAL TRAVEL</b></p><br />
                                    All travelers must be in possession of valid travel documents such as ticket, passport, visa and all other entry permits. Your passport must be valid for 6
                                    months after your return date. It is solely the responsibility of the traveler to arrange all travel documents needed for the travel. For any visa requirements
                                    passenger must confirm with local embassy of the country passenger is visiting or transiting through. Also, some countries may require passengers to be
                                    vaccinated for certain diseases or provide a medical document before boarding the flight. We advise passengers must confirm the regulations with the
                                    local embassy of the country they are visiting or transiting through. Please note, for certain one way international itineraries, passenger(s) may require a
                                    return ticket, we advise all passenger(s) to verify this information with airline or Consulate General to prevent any issues at the time of boarding.
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b>VOLUNTARY CHANGES</b></p><br />
                                    Most ticket(s) issued by The Travel Horse allows for changes but are always subject to airline rules and restrictions. The majority of these itinerary changes
                                    requires issuance of new e-ticket number as per airlines policy. All changes are subject to availability, airline rules and regulation, penalties, difference in
                                    fare from the original ticket and our administrative service fee. Fares are not guaranteed until the new ticket(s) are issued. Once changed, changes are
                                    non-reversible irrespective the new ticket(s) are issued or not and may incur airline penalty or difference in fare. New ticket numbers issued post changes
                                    does not qualify for any regulation mentioned in our 24 Hour Policy. As mentioned above airline owns the authority of a ticket and can take it's control at
                                    any point, under such circumstances if there may arise any dispute passenger cannot file a law suit against The Travel Horse.
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b>INVOLUNTARY CHANGES AND CANCELLATIONS (CHANGES AND CANCELLATIONS DONE BY AIRLINES DIRECTLY)</b></p><br />

                                    Sometimes airline make changes* involuntarily due to various reasons such as change in flight timings, layover timings, changes in travel date, flight
                                    number, departure terminal etc. These changes* are beyond the control of The Travel Horse and we are abide to follow the policy provided by the airlines
                                    to cater any request from the passenger(s). Some of these changes* might be last minute changes* and might occur while you are in transit. If you have
                                    booked low cost carrier(s), passenger(s) may contact the airline(s) directly. For latest update you can opt for our program (Flight Monitor) to get flight
                                    tracking information.
                                    Note: * abbreviated for changes and cancellations
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b>FARE CHANGE</b></p><br />
                                    Prices are not guaranteed until ticketed. The quoted prices are subject to availability. In case you fail to complete the transaction, the fare or the flights
                                    offered may differ. A transaction is considered complete when is paid in full and e-tickets are issued.
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b>ONLINE CHECK IN</b></p><br />
                                    In case you want to check in online 24 hours prior to departure of flight and print your boarding pass, you can visit airlines website directly. For certain
                                    code share (where operating and marketing carriers are different) itineraries, airlines may allow to check-in only at the airport. It is the sole responsibility
                                    of the passenger(s) to arrive at the airport on time (2 hours before departure for domestic trip and 4 hours before departure for international trip) to
                                    have sufficient time to clear through security and check-in formalities.
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b>TSA CARRY-ON RULES</b></p><br />
                                    For liquids, aerosols and other restricted items to be carried must follow TSA guideline(s) and airline provision(s). Passenger(s) are advised to check the
                                    allowed item listings and their limits on their respective websites to avoid any hassle while boarding.
                                </p>
                                <p className="pt-8">
                                    <p className="pb-1"><b>DISINSECTION</b></p><br />
                                    Certain international itineraries are subject to insecticide spraying of cabin prior to a flight or while you are in the aircraft. Federal Law requires passengers
                                    to refer to DOT's Disinsection column at www.transportation.gov/airconsumer/spray.
                                    For detailed terms and conditions visit our website at www.hmsravels.com/terms
                                </p>
                            </Box>
                        </Box>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default DownloadPdf