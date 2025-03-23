import React from 'react';

export default function About() {
    return (
        <div className="about-wrapper">
            <div>
                <h1>{'Hi, I\'m Saima! 👋'}</h1>
                <blockquote>
                    <p>💻 Computer Science and Engineering Undergrad at Gaya College of Engineering</p>
                </blockquote>
                <p className="about-links-container">
                    {/* <a href="https://twitter.com/Ajayiitism">
                        <img
                            src="https://img.shields.io/twitter/follow/Ajayiitism?style=social"
                            alt="Twitter: @ajaykrmnc"
                        />
                    </a> */}
                    <a href="https://github.com/Saima9">
                        <img
                            src="https://img.shields.io/github/followers/ankitmnc?label=follow&style=social"
                            alt="GitHub: @Saima9"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/saima-parween-737282226/">
                        <img
                            alt="Linkedin: @saima"
                            src="https://img.shields.io/badge/SaimaParween-blue?color=blue"
                        />
                    </a>
                    <a href="mailto:saimaparween281@gmail.com">
                        <img
                            src="https://img.shields.io/badge/Gmail-%40saima-red?color=red"
                            alt="Gmail: @saima"
                        />
                    </a>

                </p>
                <p>
                    My passion lies in solving challenging problems, designing algorithms, and
                    communicating complex ideas to non-technical stakeholders.
                </p>
                <p>
                    I always look to exceed expectations and am effective both working as an
                    individual and as part of a team.
                </p>
                <p>
                    In my spare time, I like to travel 🚶, read books 📚, listen to music 🎧 and
                    watch movies 📺 and sketching.
                </p>
                <p>
                    I enjoy learning new things and connecting with people across a range of
                    industries. If you ever want to bounce ideas off of me, please feel free to
                    reach out on twitter or email. 😄
                </p>
                <hr className="about-separator" />
                <h2>⚡ Technical Skills ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Area</th>
                        <th>Proficiencies</th>
                    </tr>
                    <tr>
                        <td>Langauge</td>
                        <td>C, C++, Javascript, HTML, CSS</td>
                    </tr>
                    <tr>
                        <td>Development</td>
                        <td>ReactJs/Redux, Node.Js, Bootstrap, HTML5, Web pages, CSS Flexbox, Data Processing</td>
                    </tr>
                    {/* <tr>
                        <td>Library</td>
                        <td>Pandas,Numpy,Scikit-learn,Matplotlib,Keras,Pytorch</td>
                    </tr> */}
                    <tr>
                        <td>Databases</td>
                        <td>MongoDB</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>Git, Netlify</td>
                    </tr>
                </table>
                {/* <hr className="about-separator" />
                <h2>⚡ Competitive Programming ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Site</th>
                        <th>Rating</th>
                        <th>Profile</th>
                    </tr>

                    <tr>
                        <td>Codeforces</td>
                        <td>Specailist</td>
                        <td><a href="https://codeforces.com/profile/ankiit_k_">ankiit_k_</a></td>
                    </tr>
                    <tr>
                        <td>LeetCode</td>
                        <td>Knight</td>
                        <td><a href="https://www.leetcode.com/profile/ankiit_k_">ankiit_k_</a></td>
                    </tr>
                    <tr>
                        <td>Atcoder</td>
                        <td>7 kyu</td>
                        <td><a href="https://atcoder.jp/users/ankiit_k_">ankiit_k_</a></td>
                    </tr>
                    <tr>
                        <td>Hackerrank</td>
                        <td>5*</td>
                        <td><a href="https://www.hackerrank.com/profile/ankiit_k_">ankiit_k_</a></td>
                    </tr>
                </table> */}
            </div>
        </div>
    );
}
