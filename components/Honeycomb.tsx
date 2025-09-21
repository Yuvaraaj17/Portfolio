import React, { useEffect, useState } from "react"
export const Honeycomb = () => {

    const [deviceWdith,setDeviceWidth] = useState(0)

    useEffect(()=>{
        setDeviceWidth(innerWidth)
        console.log(deviceWdith,"width")

    },[deviceWdith])

    const calcualteVertices = (offset, side) => {
        const vertices = {
            1: {
                "x": 0,
                "y": side / 2
            },
            2: {
                "x": 0,
                "y": (3 * side) / 2
            },
            3: {
                "x": (side * Math.sqrt(3)) / 2,
                "y": 2 * side
            },
            4: {
                "x": side * Math.sqrt(3),
                "y": (3 * side) / 2
            },
            5: {
                "x": side * Math.sqrt(3),
                "y": side / 2
            },
            6: {
                "x": (side * Math.sqrt(3)) / 2,
                "y": 0
            }
        }

        let styleString = "";
        console.log(Object.keys(vertices).length)
        for (let index = 1; index <= Object.keys(vertices).length; index++) {
            const elem = vertices[index]
            console.log(elem)
            styleString = styleString + " " + elem["x"] + "," + elem["y"]
        }
        console.log(styleString)
        return styleString
    }

    return (
            <div className="relative bg-green-300 flex h-fit w-full">
                <svg viewBox="0 0 52 60" width={"30%"} height={"100%"} className="bg-slate-500 border-2"><polygon points={calcualteVertices(0, 30)} fill="red" /></svg>
                <svg viewBox="0 0 52 60" width={"30%"} height={"100%"} className="bg-slate-500"><polygon points={calcualteVertices(0, 30)} fill="red" /></svg>
            </div>
    )
}