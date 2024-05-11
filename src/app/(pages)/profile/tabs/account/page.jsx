import React, { useState } from 'react'
import styles from './account.module.css'
export default function Account({ Data }) {
    const [name, setName] = useState(Data?.name); // assuming Data is your state or props
    const [isEditing, setIsEditing] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform the logic to update the name, like making an API call
        alert(name)
        setIsEditing(false);
    };

    return (
        <>
            <div className={`container p-3 ${styles.Account}`}>
                <div className="row justify-content-between ">
                    <div className="col-md-12 col-lg-12 col-xl-12 d-flex justify-content-between align-items-center">
                        <div className="name">
                            <h6 className={`${styles.Kye}`}>Name</h6>
                            <h6 className={`${styles.Kye}`}>{name}</h6>
                            {isEditing ? (
                                <form onSubmit={handleSubmit} >
                                    <div className={`${styles.Editing}`}>

                                        <input
                                            type="text"
                                            value={name}
                                            onChange={handleNameChange}
                                            className={`${styles.Value}`}
                                        />

                                        <button type="submit" className={`${styles.Btn} `}>
                                            Save
                                        </button>

                                    </div>

                                </form>
                            ) : (
                                <p className={`${styles.Value}`}>{Data?.name}</p>
                            )}
                        </div>
                        <div>
                            {!isEditing && (
                                <button className={`${styles.Btn}`} onClick={() => setIsEditing(true)}>
                                    <i className="fa-solid fa-pen-to-square"></i> Change
                                </button>
                            )}
                        </div>
                    </div>
                    <div className=" col-md-12 d-flex justify-content-between align-items-center mt-4">

                        <div className="name ">
                            <h6 className={`${styles.Kye}`}>Email</h6>
                            <p className={`${styles.Value}`}>{Data?.email}</p>
                        </div>
                        <div >
                            <button className={`${styles.BtnEmail} `}>
                                <i class="fa-solid fa-circle-plus"></i> Add another email
                            </button>
                            <button className={`${styles.Btn} ml-4 `}>
                                <i class="fa-solid fa-pen-to-square"></i> Change
                            </button>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-between align-items-center mt-4">

                        <div className="name ">
                            <h6 className={`${styles.Kye}`}>Password</h6>
                            <p className={`${styles.Value}`}>*************</p>
                        </div>
                        <div >
                            <button className={`${styles.Btn}`}>
                                <i class="fa-solid fa-pen-to-square"></i> Change
                            </button>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-between align-items-center mt-4">

                        <div className="name ">
                            <h6 className={`${styles.Kye}`}>Phone number</h6>
                            <p className={`${styles.Value}`}>{Data?.phone}</p>
                        </div>
                        <div >
                            <button className={`${styles.Btn}`}>
                                <i class="fa-solid fa-pen-to-square"></i> Change
                            </button>
                        </div>
                    </div>
                    {/* <div className="col-md-6 ">
            <div className="d-flex flex-column gap-1">

            <span className={`${styles.Kye}`}>Name</span>
            <span className={`${styles.Value}`}>John Doe</span>
            </div>
            <div className="d-flex flex-column gap-1 mt-5">

            <span className={`${styles.Kye}`}>Name</span>
            <span className={`${styles.Value}`}>John Doe</span>
            </div>
        </div>
        <div className="col-md-6 text-end">
            <p className=" mt-5">dd</p>
            <p className=" mt-5">dd</p>
        </div> */}
                </div>
            </div>


        </>
    )
}
