import React, { useEffect, useState } from "react"
import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./ui/tabs"
import Cookies from "js-cookie"
import MaterialPayemnet from "./MaterialPayement"
import axios from "axios"

export function TailorTabs({ amount, selected, title, images, product_id }) {

    const [isLogg, setIsLogg] = useState(Cookies.get('token'));

    const [measurementDetails, setMeasurementDetails] = useState({
        bust: '',
        waist: '',
        hips: '',
    });
    const [bookDetails, setBookDetails] = useState({
        name: '',
        mobNo: '',
        date: '',
    });

    const handleMeasurementChange = (e) => {
        const { name, value } = e.target;
        setMeasurementDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleBookChange = (e) => {
        const { name, value } = e.target;
        setBookDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    // const handleMeasurementSubmit = (e) => {
    //     e.preventDefault();
    //     // Process the measurement details
    //     console.log('Measurement Details:', measurementDetails);
    //     // Reset the form
    //     setMeasurementDetails({
    //         bust: '',
    //         mobNo: '',
    //         date: '',
    //         // Reset more measurement fields as needed
    //     });
    // };

    const handleBookClick = async () => {

        try {
            const data = {
                customerName: bookDetails.name,
                mobileNumber: bookDetails.mobNo,
                appointmentDate: bookDetails.date,
                storeName: selected.name,
                storeAddress: selected.address,
                storeMobileNumber: selected.phone
            }
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/dress/book`, data, {
                headers: {
                    Authorization: `${isLogg}`
                }
            });
            if (response.data.success) {
                alert('successfully book')
                setBookDetails({
                    name: '',
                    mobNo: '',
                    date: '',
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    return (
        <Tabs defaultValue="Measurement" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2 bg-[#faf7f2]">
                <TabsTrigger value="Measurement" className="data-[state=active]:bg-[#c8a165] data-[state=active]:text-white">Online Measurement</TabsTrigger>
                <TabsTrigger value="Visit" className="data-[state=active]:bg-[#c8a165] data-[state=active]:text-white">Offline Visit</TabsTrigger>
            </TabsList>
            <TabsContent value="Measurement" >
                <Card>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Bust</Label>
                            <Input type="text"
                                id="bust"
                                name="bust"
                                value={measurementDetails.bust}
                                onChange={handleMeasurementChange}
                                placeholder="Enter Burst" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Waist</Label>
                            <Input type="text"
                                id="waist"
                                name="waist"
                                value={measurementDetails.waist}
                                onChange={handleMeasurementChange} />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="waist">Hips</Label>
                            <Input type="text"
                                id="hips"
                                name="hips"
                                value={measurementDetails.hips}
                                onChange={handleMeasurementChange} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <MaterialPayemnet amount={amount} selected={selected} measurementDetails={measurementDetails} setMeasurementDetails={setMeasurementDetails} product_id={product_id} title={title} images={images} />
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="Visit">
                <Card>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name"
                                name="name"
                                value={bookDetails.name}
                                onChange={handleBookChange}
                                type="text" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="mobNo">Mobile Number</Label>
                            <Input id="mobNo"
                                name="mobNo"
                                value={bookDetails.mobNo}
                                onChange={handleBookChange}
                                type="text" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="date">Date</Label>
                            <Input id="date"
                                name="date"
                                value={bookDetails.date}
                                onChange={handleBookChange} type="date" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleBookClick} className='border-2 border-[#c8a165] bg-white text-black hover:bg-[#c8a165] hover:text-white'>Book</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
