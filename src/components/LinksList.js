import React from "react"
import {Link} from 'react-router-dom'

export const LinksList = ({links}) => {
    if (!links.length){
        return <p className="center">Have not any links</p>
    }

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Original</th>
                    <th>Shorted</th>
                    <th>Clicks Count</th>
                    <th>Details</th>
                </tr>
                </thead>

                <tbody>
                {links.map((link, index) => (
                    <tr key={link._id}>
                        <td>{index + 1}</td>
                        <td><a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></td>
                        <td><a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></td>
                        <td>{link.clicks}</td>
                        <td>
                            <Link to={`detail/${link._id}`}>Details</Link>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )
}
