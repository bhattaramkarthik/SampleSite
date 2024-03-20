
import { Star, StarFill } from 'react-bootstrap-icons';
import '../styles/Review.css';

function Review() {

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

    const editedData = (reviewData) => {
        let updatedData = [];
        for (let i = 0; i < reviewData.length; i++) {
            const item = reviewData[i];
            let content = [];
            let ratingData = [];
            let ratingSection = [];
            content.push(<p key={'Name '+i} className='namePara'>Name : {item.author}</p>);
            content.push(<p key={'Comment '+i}>Comment : {item.message}</p>);
            
            for(var j=1; j<=5 ;j++){
              if( j <= item.rating){
                ratingData.push(<StarFill key={'RatingD '+j} color='#ffe234' />);
              } else{
                ratingData.push(<Star key={'RatingD '+j} color='#ffe234' />);
              }       
            }
            ratingSection.push(<span key={'RatingSection '+i} className='ratingsSection'>{ratingData}</span>);
            content.push(<p key={'Rating '+i}>Rating : {ratingSection}</p>);
            updatedData.push(<div className='individualReview' key={item.id}>{content}</div>);
        }
        return updatedData;
    }


        return (
            <div className='reviewSection'>
                <h3 className="reviewHeading">REVIEWS</h3>
                {editedData(reviewData)}
            </div>
        )
    }

    export default Review;