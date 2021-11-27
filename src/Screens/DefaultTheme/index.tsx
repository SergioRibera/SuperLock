import { useEffect, useState } from 'react';
import './style.css';

type DefaultThemeProps = {
    options: {
        showHours: boolean;
        showMinutes: boolean;
        showSeconds: boolean;

        showAmPm: boolean;
        showDate: boolean;
    };
};

const SimpleClock = (options: DefaultThemeProps) => {
    const { showHours, showMinutes, showSeconds, showAmPm, showDate } = options.options;
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    const updateTime = () => {
        const newTime = new Date();
        let stringTime = "";
        if (showHours) stringTime += newTime.getHours() + ":";
        if (showMinutes) stringTime += newTime.getMinutes() + ":";
        if (showSeconds) stringTime += newTime.getSeconds();
        if (showAmPm) stringTime += newTime.getHours() >= 12 ? " PM" : " AM";

        setTime(stringTime);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            updateTime();
            setDate(new Date().toLocaleDateString());
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return (
        <header className="header">
            <h1>{time}</h1>
            {showDate && <h2>{date}</h2>}
        </header>
    );
};

const ProfileUnlock = () => {
    const [profileSrc, setProfileSrc] = useState("https://i.imgur.com/7yUvePI.png");
    const [profileName, setProfileName] = useState("Sergio Ribera");

    return (
        <section className="content">
            <img src={profileSrc} alt="profile" />
            <div className="profile-name">
                <h1>{profileName}</h1>
            </div>
            <div className="input-password">
                <input type="password" placeholder="Password" />
            </div>
        </section>
    );
}

const DefaultTheme = (props: DefaultThemeProps) => {

    return (
        <div className="default-theme">
            <div className="container">
                <SimpleClock options={props.options} />
                <ProfileUnlock />
            </div>
        </div>
    );
};

export {
    DefaultTheme
};
