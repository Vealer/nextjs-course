import Link from 'next/link'
import { getFeaturedEvents } from '@/dummy-data';
import EventList from '@/components/events/event-list';


function HomePage() {
    const featuredEvents = getFeaturedEvents();


  return (<div>
    <h1>The Project Events Home Page</h1>
    <div>
        <EventList items={featuredEvents} />
    </div>
  </div>)
}

export default HomePage;