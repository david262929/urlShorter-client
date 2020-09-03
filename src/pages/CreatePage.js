import React, {useContext, useEffect, useState} from "react"
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from 'react-router-dom';


export const CreatePage = () => {
    const history = useHistory();
    const auth = useContext(AuthContext)
    const {request} = useHttp();
    const [link, setLink] = useState('');

    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    const pressHandler = async event => {
        if( event.key === 'Enter' ){
            try{
                console.log( `Bearer ${auth.token}` );
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization : `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.link._id}`)
            }catch (e) {}
        }
    }

    return (
        <div className="row">
            <h1>Create Page</h1>
            <div className="col s8 offset-s2" style={{paddingTop: "2rem"}}>
                <div className="input-field">
                    <input
                        placeholder="Paste a link"
                        id="link"
                        type="text"
                        value={link}
                        onChange={(e => setLink(e.target.value))}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="email">Paste a Link</label>
                </div>
            </div>
        </div>
    )
}