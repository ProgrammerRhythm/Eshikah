import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Blog from '../Data/Blog/Blogs';
import NotFound from '../NotFound/NotFound';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Foter';
import { Microphone2, MicrophoneSlash } from 'iconsax-react';

const BlogBody = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const synth = window.speechSynthesis;

    useEffect(() => {
        let blog = Blog.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
        }
    }, [id]);
    useEffect(() => {
        const savedIsPlaying = JSON.parse(localStorage.getItem('playing'));
        if (savedIsPlaying !== null) {
            setIsPlaying(savedIsPlaying);
        }
    }, []);

    function generateAudio(text) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = synth.getVoices();
        const femaleVoice = voices.find((voice) => voice.name === 'Karen'); // Change 'Karen' to the name of the female voice you want to use
        utterance.voice = femaleVoice;
        synth.speak(utterance);
        setIsPlaying(true);
        localStorage.setItem('playing', true);
    }

    function stopAudio() {
        synth.cancel();
        setIsPlaying(false);
        localStorage.setItem('playing', false);
    }

    return (
        <div>
            {blog ? (
                <div>
                    <div className="container BlogBoody">
                        <Navbar></Navbar>
                        <h1 className="post-title">{blog.title}</h1>
                        <p style={{ color: 'gray' }}>
                            Have a limited amount of time? Listen to the blog.
                        </p>
                        {!isPlaying ? (
                            <button className='BTNHide' onClick={() => generateAudio(blog.content)}>
                                <MicrophoneSlash size="32" color="#dc3545" />
                                <span>Click To Listen</span>
                            </button>
                        ) : (
                            <button className='BTNHide' onClick={stopAudio}>
                                <Microphone2 size="32" color="#dc3545" />
                                <span>Stop</span>
                            </button>
                        )}
                        <p style={{ color: '#949494' }}>
                            by{' '}
                            <span style={{ color: '#dc3545' }}>{blog.By} </span> {blog.date}{' '}
                        </p>
                        <img className="img-fluid" src={blog.img} alt="" />
                        <br />
                        <br />
                        <br />
                        <span style={{ color: '#87888a', fontSize: '17px' }}>
                            {blog.content}
                        </span>
                    </div>
                    <Footer></Footer>
                </div>
            ) : (
                <NotFound />
            )}
        </div>
    );

};

export default BlogBody;
