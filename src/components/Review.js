
import { Star, StarFill } from 'react-bootstrap-icons';
import '../styles/Review.css';
import { useEffect, useState } from 'react';

function Review() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(0);

    const [data, setData] = useState([]);

    const reviewData = [
        {
            id: 1,
            author: 'ABC',
            message: 'This is good app and is wonderful',
            rating: 2
        },
        {
            id: 2,
            author: 'DEF',
            message: 'This is nice app and is wonderful',
            rating: 3
        },
        {
            id: 3,
            author: 'XYZ',
            message: 'This is good app and is wonderful',
            rating: 5
        }
    ];

    useEffect(() => {
        let updatedData = [];
        for (let i = 0; i < reviewData.length; i++) {
            const item = reviewData[i];
            let content = [];
            let ratingData = [];
            let ratingSection = [];
            content.push(<p key={'Name ' + i} className='namePara'>Name : {item.author}</p>);
            content.push(<p key={'Comment ' + i}>Comment : {item.message}</p>);

            for (var j = 1; j <= 5; j++) {
                if (j <= item.rating) {
                    ratingData.push(<StarFill key={'RatingD ' + j} color='#ffe234' />);
                } else {
                    ratingData.push(<Star key={'RatingD ' + j} color='#ffe234' />);
                }
            }
            ratingSection.push(<span key={'RatingSection ' + i} className='ratingsSection'>{ratingData}</span>);
            content.push(<p key={'Rating ' + i}>Rating : {ratingSection}</p>);
            updatedData.push(<div className='individualReview' key={item.id}>{content}</div>);
        }
        setData(updatedData);
    }, []);

    function handleUnfill(e) {
        document.getElementById('rating' + e).className.baseVal = 'hideStar';
        document.getElementById('ratingf' + e).className.baseVal = 'unhideStar';
        setRating(rating + 1);
    }

    function handleFill(e) {
        document.getElementById('rating' + e).className.baseVal = 'unhideStar';
        document.getElementById('ratingf' + e).className.baseVal = 'hideStar';
        setRating(rating - 1);
    }

    function handleSubmit() {
        const addedData = {
            id: new Date().getMilliseconds(),
            author: name,
            message: message,
            rating: rating
        };

        let content = [];
        let ratingData = [];
        let ratingSection = [];
        content.push(<p key={'Name ' + addedData.id} className='namePara'>Name : {addedData.author}</p>);
        content.push(<p key={'Comment ' + addedData.id}>Comment : {addedData.message}</p>);

        for (var j = 1; j <= 5; j++) {
            if (j <= addedData.rating) {
                ratingData.push(<StarFill key={'RatingD ' + j} color='#ffe234' />);
            } else {
                ratingData.push(<Star key={'RatingD ' + j} color='#ffe234' />);
            }
        }
        ratingSection.push(<span key={'RatingSection ' + addedData.id} className='ratingsSection'>{ratingData}</span>);
        content.push(<p key={'Rating ' + addedData.id}>Rating : {ratingSection}</p>);
        var newData = [];
        for (var i = 0; i < data.length; i++) {
            newData.push(data[i]);
        }
        newData.push(<div className='individualReview' key={addedData.id}>{content}</div>);
        setData(newData);
        setName("");
        setMail("");
        setMessage("");
        setRating(0);
        for (var k = 1; k <= 5; k++) {
            document.getElementById('rating' + k).className.baseVal = 'unhideStar';
            document.getElementById('ratingf' + k).className.baseVal = 'hideStar';
        }
    }

    return (
        <div className='reviewSection'>
            <h3 className="reviewHeading">REVIEWS</h3>
            {data}
            <div>
                <h3 className='reviewHeading'>Leave Your Comment</h3>
                <div>
                    <p className='reviewHeading'>Name : <input type='text' placeholder='Enter your name' value={name} onChange={(e) => { setName(e.target.value) }}></input></p>
                    <p className='reviewHeading'>Email : <input type='text' placeholder='Enter your email' value={mail} onChange={(e) => { setMail(e.target.value) }}></input></p>
                    <p className='reviewHeading'>Comments : <input type='text' placeholder='Enter your comments' maxLength={50} value={message} onChange={(e) => { setMessage(e.target.value) }}></input></p>
                    <p className='reviewHeading'>Rating :
                        <Star className='unhideStar' color='#ffe234' id='rating1' onClick={() => handleUnfill(1)} />
                        <StarFill className='hideStar' id='ratingf1' color='#ffe234' onClick={() => handleFill(1)} />
                        <Star className='unhideStar' id='rating2' color='#ffe234' onClick={() => handleUnfill(2)} />
                        <StarFill className='hideStar' id='ratingf2' color='#ffe234' onClick={() => handleFill(2)} />
                        <Star className='unhideStar' id='rating3' color='#ffe234' onClick={() => handleUnfill(3)} />
                        <StarFill className='hideStar' id='ratingf3' color='#ffe234' onClick={() => handleFill(3)} />
                        <Star className='unhideStar' id='rating4' color='#ffe234' onClick={() => handleUnfill(4)} />
                        <StarFill className='hideStar' id='ratingf4' color='#ffe234' onClick={() => handleFill(4)} />
                        <Star className='unhideStar' id='rating5' color='#ffe234' onClick={() => handleUnfill(5)} />
                        <StarFill className='hideStar' id='ratingf5' color='#ffe234' onClick={() => handleFill(5)} />
                    </p>
                    <p className='reviewHeading'><button className='submitButtonClass' onClick={() => { handleSubmit() }}>Submit</button></p>
                </div>
            </div>
        </div>
    )
}

export default Review;