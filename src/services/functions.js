import { db } from "../lib/firebase";
import {
  doc,
  updateDoc,
  collection,
  query,
  getDocs,
  getDoc,
} from "firebase/firestore";

export async function setNamesGroups(
  setNameA,
  setNameB,
  setNameC,
  setNameD,
  setNameE
) {
  getDocumentsId().then((el) => {
    el.forEach((id) => {
      getGroup(id).then((value) => {
        switch (value.groupId) {
          case "A":
            setNameA(value.name);
            break;
          case "B":
            setNameB(value.name);
            break;
          case "C":
            setNameC(value.name);
            break;
          case "D":
            setNameD(value.name);
            break;
          case "E":
            setNameE(value.name);
            break;
          default:
            break;
        }
      });
    });
  });
}

export async function setQuartiers(
  setQuartierA,
  setQuartierB,
  setQuartierC,
  setQuartierD,
  setQuartierE
) {
  getDocumentsId().then((el) => {
    el.forEach((id) => {
      getGroup(id).then((value) => {
        switch (value.groupId) {
          case "A":
            setQuartierA(value.quartiers);
            break;
          case "B":
            setQuartierB(value.quartiers);
            break;
          case "C":
            setQuartierC(value.quartiers);
            break;
          case "D":
            setQuartierD(value.quartiers);
            break;
          case "E":
            setQuartierE(value.quartiers);
            break;
          default:
            break;
        }
      });
    });
  });
}

export async function setProprietes(
  setProprieteA,
  setProprieteB,
  setProprieteC,
  setProprieteD,
  setProprieteE
) {
  getDocumentsId().then((el) => {
    el.forEach((id) => {
      getGroup(id).then((value) => {
        switch (value.groupId) {
          case "A":
            setProprieteA(value.proprietes);
            break;
          case "B":
            setProprieteB(value.proprietes);
            break;
          case "C":
            setProprieteC(value.proprietes);
            break;
          case "D":
            setProprieteD(value.proprietes);
            break;
          case "E":
            setProprieteE(value.proprietes);
            break;
          default:
            break;
        }
      });
    });
  });
}

export async function getDocumentsId() {
  const q = query(collection(db, "groups"));
  const querySnapshot = await getDocs(q);
  let docsId = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    docsId.push(doc.id);
  });
  return docsId;
}

export async function getGroup(groupId) {
  const docRef = doc(db, "groups", groupId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let doc = docSnap.data();
    return doc;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}

export async function updateAccountAll(
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
) {
  getDocumentsId().then((el) => {
    el.forEach((id) => {
      getGroup(id).then((value) => {
        const accountRef = doc(db, "groups", id);

        updateDoc(accountRef, {
          account: value.account + value.salary,
        });
        switch (value.groupId) {
          case "A":
            setGroupMooneyA(value.account + value.salary);
            setSalaryA(value.salary);
            break;
          case "B":
            setGroupMooneyB(value.account + value.salary);
            setSalaryB(value.salary);
            break;
          case "C":
            setGroupMooneyC(value.account + value.salary);
            setSalaryC(value.salary);
            break;
          case "D":
            setGroupMooneyD(value.account + value.salary);
            setSalaryD(value.salary);
            break;
          case "E":
            setGroupMooneyE(value.account + value.salary);
            setSalaryE(value.salary);
            break;
          default:
            break;
        }
      });
    });
  });
}
