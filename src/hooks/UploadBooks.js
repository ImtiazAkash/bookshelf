import { getDatabase, ref, set } from "firebase/database";
import { uploadBytes } from "firebase/storage";
import { useAuth } from "../contexts/AuthContext";

function UploadBooks({values}) {
  const { currentUser } = useAuth();

  let cover = document.getElementById("formFileCover");
  let book = document.getElementById("formFileBook");

  const db = getDatabase();
  const dbRef = ref(db, "Books/userUploads/" + currentUser.uid);

  // set book info
  set(dbRef, values);

  //uploading files
  uploadBytes(dbRef, cover).then((snapshot) => {
    console.log("cover uploaded");
  });
  uploadBytes(dbRef, book).then((snapshot) => {
    console.log("uploaded book");
  });
}

export default UploadBooks;
