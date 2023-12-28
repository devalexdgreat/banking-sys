import Link from "next/link";
import AdminNav from "../../components/AdminNav";

export default function Setting({ params }) {
    const {id} = params;
    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-full">
                <div className="w-11/12 mx-auto my-32">
                    <div className="w-full">
                        <h1 className="text-xl md:text-3xl font-bold">Settings{id}</h1>
                    </div>
                    <div className="w-full mt-12">
                        <div className="flex flex-col md:flex-row gap-6 mt-12">
                            <div className="w-full md:w-6/12">
                               <div className="border rounded-2xl p-3 bg-blue-600 text-white w-full md:w-8/12">
                                    <div className="flex flex-col gap-12">
                                        <div className="w-full flex justify-between">
                                            <span>Credit Card</span>
                                            <span className="font-bold">NDB</span>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <div className="bg-yellow-400 w-14 h-10 rounded-md"></div>
                                            <span className="text-xl font-bold">8800-4888-4999-9990</span>
                                        </div>
                                        <h1>Great Alexander</h1>
                                    </div>
                                </div> 
                            </div>
                            
                            <div className="w-full md:w-6/12">
                                <form className="w-full">
                                    <div className="w-full md:w-9/12 mb-6">
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Withdrawal Limit
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="200,000 Naira"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                                            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                            focus:ring-blue-600 sm:text-sm sm:leading-6 outline-none ps-3"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={"#"} className="py-2 px-4 bg-blue-600 hover:bg-blue-500 
                                        text-white rounded-full">Save</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}