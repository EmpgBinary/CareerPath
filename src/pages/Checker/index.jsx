export default function Checker({ modal, setModal, course }) {
  console.log(modal);
  return (
    <>
      {modal && (
        <div className="contain border rounded-t-xl h-screen fixed bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          quaerat quos expedita non accusamus nemo ducimus debitis minus
          laudantium autem molestiae ipsa dolore recusandae sapiente, distinctio
          ab. Impedit, quaerat ad a ullam omnis fugiat odit esse aperiam?
          Cupiditate dolores nobis incidunt tempore voluptate molestias vel
          totam autem, hic ipsam esse.
        </div>
      )}
    </>
  );
}
