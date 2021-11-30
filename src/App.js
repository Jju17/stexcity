import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import Clock from "react-live-clock";
import GridGroupContainer from "./GridGroupContainer";
import {
  updateAccountAll,
  setNamesGroups,
  setQuartiers,
  setProprietes,
} from "./services/functions";

const Container = tw.div`bg-red-500 w-screen h-screen grid grid-cols-3 grid-rows-2 gap-4 p-4`;

const GridContainer = tw.div`flex flex-col items-center justify-evenly bg-white w-full h-full rounded-xl`;

const GroupTitle = tw.h2`w-full text-center text-xl md:text-4xl lg:text-6xl`;
const Logo = tw.img`w-2/3 lg:w-1/3`;
const MyClock = tw(Clock)`w-full text-center text-xl md:text-4xl lg:text-6xl`;

function App() {
  const [nameA, setNameA] = useState("A");
  const [nameB, setNameB] = useState("B");
  const [nameC, setNameC] = useState("C");
  const [nameD, setNameD] = useState("D");
  const [nameE, setNameE] = useState("E");

  const [quartierA, setQuartierA] = useState([]);
  const [quartierB, setQuartierB] = useState([]);
  const [quartierC, setQuartierC] = useState([]);
  const [quartierD, setQuartierD] = useState([]);
  const [quartierE, setQuartierE] = useState([]);

  const [proprieteA, setProprieteA] = useState([]);
  const [proprieteB, setProprieteB] = useState([]);
  const [proprieteC, setProprieteC] = useState([]);
  const [proprieteD, setProprieteD] = useState([]);
  const [proprieteE, setProprieteE] = useState([]);

  const [groupMoneyA, setGroupMooneyA] = useState(0);
  const [groupMoneyB, setGroupMooneyB] = useState(0);
  const [groupMoneyC, setGroupMooneyC] = useState(0);
  const [groupMoneyD, setGroupMooneyD] = useState(0);
  const [groupMoneyE, setGroupMooneyE] = useState(0);

  const [salaryA, setSalaryA] = useState(0);
  const [salaryB, setSalaryB] = useState(0);
  const [salaryC, setSalaryC] = useState(0);
  const [salaryD, setSalaryD] = useState(0);
  const [salaryE, setSalaryE] = useState(0);

  useEffect(() => {
    setNamesGroups(setNameA, setNameB, setNameC, setNameD, setNameE);

    setInterval(() => {
      setQuartiers(
        setQuartierA,
        setQuartierB,
        setQuartierC,
        setQuartierD,
        setQuartierE
      );
      setProprietes(
        setProprieteA,
        setProprieteB,
        setProprieteC,
        setProprieteD,
        setProprieteE
      );
      updateAccountAll(
        setGroupMooneyA,
        setGroupMooneyB,
        setGroupMooneyC,
        setGroupMooneyD,
        setGroupMooneyE,
        setSalaryA,
        setSalaryB,
        setSalaryC,
        setSalaryD,
        setSalaryE
      );
    }, 5000);
  }, []); // eslint-disable-line

  return (
    <>
      <Container>
        <GridGroupContainer
          groupName={nameA}
          groupMoney={groupMoneyA}
          groupEarning={salaryA}
          quartiers={quartierA}
          proprietes={proprieteA}
        />
        <GridContainer>
          <GroupTitle>ST-EX CITY</GroupTitle>

          <Logo src="images/logo/stex.png" alt="STEX" />

          <div>
            <MyClock
              format={"HH:mm:ss"}
              ticking={true}
              timezone={"Europe/Brussels"}
            />
          </div>
        </GridContainer>
        <GridGroupContainer
          groupName={nameE}
          groupMoney={groupMoneyE}
          groupEarning={salaryE}
          quartiers={quartierE}
          proprietes={proprieteE}
        />
        <GridGroupContainer
          groupName={nameB}
          groupMoney={groupMoneyB}
          groupEarning={salaryB}
          quartiers={quartierB}
          proprietes={proprieteB}
        />
        <GridGroupContainer
          groupName={nameC}
          groupMoney={groupMoneyC}
          groupEarning={salaryC}
          quartiers={quartierC}
          proprietes={proprieteC}
        />
        <GridGroupContainer
          groupName={nameD}
          groupMoney={groupMoneyD}
          groupEarning={salaryD}
          quartiers={quartierD}
          proprietes={proprieteD}
        />
      </Container>
    </>
  );
}

export default App;
