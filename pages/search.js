import { MapIcon } from "@heroicons/react/solid"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from "../components/InfoCard"

function Search(props) {
    const router = useRouter();
    console.log(props.searchResult);
    console.log(router.query);
    const { location, startDate, endDate, numberOfGuest } = router.query;

    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formatedStartDate} - ${formatedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} ${range} for ${numberOfGuest} Guests`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className='text-xs'>300+ stays for 5 {numberOfGuest} of guests from {range}</p>
                    <h1 className="text-3xl font-semibold">Stays in {location} </h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-600 whitespace-nowrap">
                        <p className="button"> Cancellation Flexibility</p>
                        <p className="button"> Type of Place</p>
                        <p className="button"> Price</p>
                        <p className="button"> Rooms and Beds</p>
                        <p className="button"> More Fileters</p>
                    </div>
                    <div className="flex flex-col">
                        {
                            props.searchResult.map((item) => (
                                <InfoCard
                                    key={item.img}
                                    img={item.img}
                                    title={item.title}
                                    location={item.location}
                                    description={item.description}
                                    star={item.star}
                                    price={item.price}
                                    total={item.total}
                                />
                            ))
                        }
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search;


export async function getServerSideProps() {
    const searchResult = await fetch('http://links.papareact.com/isz')
        .then(res => res.json());

    return {
        props: {
            searchResult,
        }
    }
}