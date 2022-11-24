import React from 'react';
import "../styles/search.css"

export default function SearchPage() {


    return (
        <>
            <section className='flex'>
                <div className='search-bar'>
                    <label className='search-label' htmlFor='searchBar'>Search</label>
                    <input type="text" name='searchBar' id='searchBar' placeholder='Where do you want to live'></input>
                </div>
                <div className='grid content-wrapper'>
                    <div className='sidebar'>
                        <h1>lesgo</h1>
                    </div>
                    <div className='search-results'>
                        <img src='https://image-lambda.boligportal.dk/3e5fdb5057d9f0a34ef60b6f08c4ff7f?auto=compress,enhance,format&h=800' className='image' />
                        <img src='https://image-lambda.boligportal.dk/3e5fdb5057d9f0a34ef60b6f08c4ff7f?auto=compress,enhance,format&h=800' className='image' />
                        <img src='https://image-lambda.boligportal.dk/3e5fdb5057d9f0a34ef60b6f08c4ff7f?auto=compress,enhance,format&h=800' className='image' />
                        <img src='https://image-lambda.boligportal.dk/3e5fdb5057d9f0a34ef60b6f08c4ff7f?auto=compress,enhance,format&h=800' className='image' />
                        <img src='https://image-lambda.boligportal.dk/3e5fdb5057d9f0a34ef60b6f08c4ff7f?auto=compress,enhance,format&h=800' className='image' />
                        <img src='https://image-lambda.boligportal.dk/3e5fdb5057d9f0a34ef60b6f08c4ff7f?auto=compress,enhance,format&h=800' className='image' />
                    </div>
                </div>
            </section>
        </>
    )
}