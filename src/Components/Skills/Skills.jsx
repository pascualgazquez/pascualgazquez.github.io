import React from 'react';
import './Skills.css';

import ableton from '../../assets/icons/ableton.svg';
import aseprite from '../../assets/icons/aseprite.svg';
import audacity from '../../assets/icons/audacity.svg';
import cplusplus from '../../assets/icons/c++.svg';
import csharp from '../../assets/icons/csharp.svg';
import flstudio from '../../assets/icons/flstudio.svg';
import gamemaker from '../../assets/icons/gamemaker.svg';
import javascript from '../../assets/icons/javascript.svg';
import photoshop from '../../assets/icons/photoshop.svg';
import premiere from '../../assets/icons/premiere.svg';
import python from '../../assets/icons/python.svg';
import reactIcon from '../../assets/icons/react.svg';
import unity from '../../assets/icons/unity.svg';
import unrealengine from '../../assets/icons/unrealengine.svg';


// Import all icons dynamically
const iconPaths = {
    "Ableton": ableton,
    "Aseprite": aseprite,
    "Audacity": audacity,
    "C++": cplusplus,
    "C#": csharp,
    "FL Studio": flstudio,
    "GameMaker 2": gamemaker,
    "JavaScript": javascript,
    "Photoshop": photoshop,
    "Premiere": premiere,
    "Python": python,
    "React": reactIcon,
    "Unity": unity,
    "Unreal Engine": unrealengine,
};


const Skills = () => {
    const technicalSkills = [
        {
            category: "Languages",
            items: ["C++", "C#", "Python", "JavaScript", "React"],
        },
        {
            category: "Engines",
            items: ["Unity", "Unreal Engine", "GameMaker 2"],
        },
    ];

    const creativeSkills = [
        {
            category: "Graphics",
            items: ["Photoshop", "Premiere", "Aseprite"],
        },
        {
            category: "Music",
            items: ["FL Studio", "Ableton", "Audacity"],
        },
    ];

    return (
        <div>
            <p className="stext2">
                <>
                    I studied  {" "}
                    <span style={{fontWeight: "bold"}}>
                        videogame design
                    </span> {" "}
                    so I have experience in both programming and design.
                    <br />
                    I have developed projects in many programming languages and used different game engines
                </>
            </p>
            {/* Technical Section */}
            <section className="ssection">

                <div className="scontainer">
                    {technicalSkills.map((skill, index) => (
                        <div key={index} className="div">
                            <h3 className="title2">{skill.category}</h3>
                            <ul className="sul">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="stext">
                                        {iconPaths[item] && (
                                            <img className="skill-icon" src={iconPaths[item]} alt={item} />
                                        )}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Creative Skills Section */}
            <section className="ssection">

                <div className="scontainer">
                    {creativeSkills.map((skill, index) => (
                        <div key={index} className="div">
                            <h3 className="title2">{skill.category}</h3>
                            <ul className="sul">
                                {skill.items.map((item, idx) => (
                                    <li key={idx} className="stext">
                                        {iconPaths[item] && (
                                            <img className="skill-icon" src={iconPaths[item]} alt={item} />
                                        )}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
