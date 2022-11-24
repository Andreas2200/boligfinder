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
                        <div className='flex filter-box'>
                            <h1>Boligtype</h1>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Lejligheder</label>
                                <input type="checkbox" name="lejligheder" id="lejligheder"/>
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Værelser</label>
                                <input type="checkbox" name="værelser" id="værelser"/>
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Huse</label>
                                <input type="checkbox" name="huse" id="huse"/>
                            </div>
                            <div className='flex filter-checkbox'>
                                <label htmlFor='lejligheder'>Rækkehuse</label>
                                <input type="checkbox" name="rækkehuse" id="rækkehuse"/>
                            </div>                            
                        </div>
                        <div className='flex filter-box'>
                            <div className='rent-input'>
                                <label htmlFor='rent'>Rent</label>
                                <input type="number" name="rent" id="rent"/>
                            </div>
                        </div>
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