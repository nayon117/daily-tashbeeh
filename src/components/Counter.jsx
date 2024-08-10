import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementAlhamdulillah,
  incrementAllahAkbar,
  incrementSubhanallah,
  resetMessage,
} from "../redux/features/counter/counterSlice";
import { toast } from "react-toastify";

const Counter = () => {
  const { subhanallahCount, allhamdulillahCount, allahakbarCount, message } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(resetMessage());
    }
  }, [message, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 to-teal-200 p-4">
      <div className="w-full max-w-4xl bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 m-4">
        <h1 className="text-5xl font-extrabold text-emerald-800 mb-10 text-center">
          Daily Tashbeeh
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          <TashbeehButton
            onClick={() => dispatch(incrementSubhanallah())}
            text="Subhanallah"
            count={subhanallahCount}
            className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 focus:ring-emerald-500"
          />
          <TashbeehButton
            onClick={() => dispatch(incrementAlhamdulillah())}
            text="Alhamdulillah"
            count={allhamdulillahCount}
            className="bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus:ring-teal-500"
          />
          <TashbeehButton
            onClick={() => dispatch(incrementAllahAkbar())}
            text="Allahu Akbar"
            count={allahakbarCount}
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
};

const TashbeehButton = ({ onClick, text, count, className }) => (
  <button
    onClick={onClick}
    className={`${className} text-white rounded-2xl px-8 py-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50 flex flex-col items-center`}
  >
    <span className="text-xl mb-2 font-semibold">{text}</span>
    <span className="text-4xl font-bold">{count}</span>
  </button>
);

export default Counter;