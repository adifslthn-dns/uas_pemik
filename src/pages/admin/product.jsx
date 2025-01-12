import { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({ judul: '', deskripsi: '' });

    // Fetching data from API
    useEffect(() => {
        const ambilData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
            } catch (error) {
                setError('Data gagal diambil');
            }
        };

        ambilData();
    }, []); 

  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts',form);
            setData([...data ,{...form ,id : response.data.id}]);
            setForm({title: "" ,body:''})
        } catch (error) {
            setError('Data gagal diambil');
        }

      
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    useEffect(() => {
        if (data.length > 0) {
            console.log(data);
        }
    }, [data]);

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg space-y-6">
          
            <table className="min-w-full table-auto bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <thead>
                    <tr className="bg-blue-600 text-white">
                        <th className="px-6 py-3 text-left">#</th>
                        <th className="px-6 py-3 text-left">Title</th>
                        <th className="px-6 py-3 text-left">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((post) => (
                        <tr key={post.id} className="border-t">
                            <td className="px-6 py-4">{post.id}</td>
                            <td className="px-6 py-4">{post.title}</td>
                            <td className="px-6 py-4">{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Display error if fetching data fails */}
            {error && <p className="text-red-500 font-semibold">{error}</p>}

        
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="judul" className="block text-lg font-medium text-gray-700">Judul</label>
                    <input 
                        id="judul"
                        type="text"
                        name="judul"
                        value={form.judul} 
                        onChange={handleChange}
                        required
                        className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>

                <div>
                    <label htmlFor="deskripsi" className="block text-lg font-medium text-gray-700">Deskripsi</label>
                    <textarea 
                        id="deskripsi"
                        name="deskripsi"
                        value={form.deskripsi} 
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>

                <div className="flex justify-center">
                    <button 
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Product;
