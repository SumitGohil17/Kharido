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
import MaterialPayemnet from "./MaterialPayement"

export function TailorTabs({ amount, selected }) {

    const [measurementDetails, setMeasurementDetails] = useState({
        bust: '',
        waist: '',
        hips: '',
        // Add more measurement fields as needed
    });

    const handleMeasurementChange = (e) => {
        const { name, value } = e.target;
        setMeasurementDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleMeasurementSubmit = (e) => {
        e.preventDefault();
        // Process the measurement details
        console.log('Measurement Details:', measurementDetails);
        // Reset the form
        setMeasurementDetails({
            bust: '',
            waist: '',
            hips: '',
            // Reset more measurement fields as needed
        });
    };

    const handleBookClick = (e) => {
        e.preventDefault();
        if (selected.length === 0) {
            alert('Please select at least one tailor to proceed.'); // Set error message
        } else {
            // setError(''); // Clear error message if at least one tailor is selected
            // Proceed with booking logic
            console.log(selected);
            alert('Booking confirmed with selected tailors:', selected);
        }
    };

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
                        <MaterialPayemnet amount={amount} />
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="Visit">
                <Card>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Name</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">Mobile Number</Label>
                            <Input id="new" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">Date</Label>
                            <Input id="new" type="date" />
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
