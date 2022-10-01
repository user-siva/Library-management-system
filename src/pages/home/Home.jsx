import React from 'react';
import TopBar from "../../components/topbar/TopBar"
import Card from "../../components/card/Card";
import "./home.css"
function Home() {
    return (
        <>
            <TopBar />
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </>
    );
}

export default Home;