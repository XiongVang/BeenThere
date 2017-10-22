import React from "react";
import { Card, CardTitle } from "react-materialize";

const Details = props => {
  return (
    <div className="container">
      <h5 className="header">{"<link to share>"}</h5>
      <Card
        header={
          <CardTitle
            reveal
            image={
              "https://images.unsplash.com/photo-1506917980821-213681597089?w=1950"
            }
            waves="light"
          />
        }
        title="Card Title"
        reveal={
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        }
      >
        <p>
          <a href="#">This is a link</a>
        </p>
      </Card>
      <Card
        header={
          <CardTitle
            reveal
            image={
              "https://images.unsplash.com/photo-1506800075271-265b16abe1e7?w=1951"
            }
            waves="light"
          />
        }
        title="Card Title"
        reveal={
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        }
      >
        <p>
          <a href="#">This is a link</a>
        </p>
      </Card>
      <Card
        header={
          <CardTitle
            reveal
            image={
              "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?w=1950"
            }
            waves="light"
          />
        }
        title="Card Title"
        reveal={
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        }
      >
        <p>
          <a href="#">This is a link</a>
        </p>
      </Card>
    </div>
  );
};

export default Details;
