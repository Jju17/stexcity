import React from "react";
import tw from "twin.macro";

const Container = tw.div`flex flex-col items-center text-center justify-evenly bg-white w-full h-full rounded-xl`;

const GroupTitle = tw.h2`w-full text-center text-xl md:text-4xl lg:text-6xl`;
const GroupMoney = tw.p`w-full text-center text-base md:text-lg lg:text-xl`;
const GroupEarningTw = tw.p`w-full text-center text-base md:text-lg lg:text-xl`;

export default function GridGroupContainer(props) {
  return (
    <Container>
      <div>
        <GroupTitle>{props.groupName}</GroupTitle>
      </div>
      <div className="flex flex-wrap w-full justify-evenly">
        <div>
          <p>Compte : </p>
          <GroupMoney>
            {props.groupMoney} <small>stex</small>$
          </GroupMoney>
        </div>
        <div>
          <p>Salaire :</p>
          <GroupEarningTw>
            {props.groupEarning}
            <small>stex</small>$/<small>5s</small>
          </GroupEarningTw>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-evenly">
        <div>
          <p>Quartiers : </p>
          {props.quartiers && props.quartiers.length > 0 ? (
            props.quartiers.map((quar) => <p>{quar}</p>)
          ) : (
            <p>Aucun</p>
          )}
        </div>
        <div>
          <p>Propriétés : </p>
          {props.proprietes && props.proprietes.length > 0 ? (
            props.proprietes.map((prop) => <p>{prop}</p>)
          ) : (
            <p>Aucune</p>
          )}
        </div>
      </div>
    </Container>
  );
}
