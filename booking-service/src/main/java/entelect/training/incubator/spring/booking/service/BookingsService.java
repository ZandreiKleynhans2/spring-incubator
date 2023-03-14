package entelect.training.incubator.spring.booking.service;

import entelect.training.incubator.spring.booking.model.Booking;
import entelect.training.incubator.spring.booking.model.BookingSearchRequest;
import entelect.training.incubator.spring.booking.model.SearchType;
import entelect.training.incubator.spring.booking.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.util.*;
import java.util.function.Supplier;

@Service
public class BookingsService {

    private final BookingRepository bookingRepository;

    public BookingsService(BookingRepository bookingRepository) {this.bookingRepository = bookingRepository;}

    public Booking createBooking(Booking booking){

        booking.setReferenceNumber(generateReferenceCode());

        return bookingRepository.save(booking);
    }

    public List<Booking> getBookings() {
        Iterable<Booking> bookingIterable = bookingRepository.findAll();

        List<Booking> result = new ArrayList<>();
        bookingIterable.forEach(result::add);

        return result;
    }

    public Booking getBooking(Integer id){
        Optional<Booking> bookingOptional = bookingRepository.findById(id);
        return bookingOptional.orElse(null);
    }

    public ArrayList<Booking> searchBookings(BookingSearchRequest bookingSearchRequest) {

        ArrayList<Booking> bookings = new ArrayList<Booking>();

        if (bookingSearchRequest.getCustomerId() != null) {
            bookings = bookingRepository.findByCustomerId(bookingSearchRequest.getCustomerId());
        }
        else if(bookingSearchRequest.getFlightId() != null) {
            bookings = bookingRepository.findByFlightId(bookingSearchRequest.getFlightId());
        }
        else if (bookingSearchRequest.getReferenceNumber() != null) {
            bookings = bookingRepository.findByReferenceNumber(bookingSearchRequest.getReferenceNumber());
        }
        else {
            bookings = null;
        }

        return bookings;
    }

    public static String generateReferenceCode() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        // Generate the first 3 capital letters
        for (int i = 0; i < 3; i++) {
            char ch = (char) (random.nextInt(26) + 'A');
            sb.append(ch);
        }
        // Generate the next 3 numbers
        for (int i = 0; i < 4; i++) {
            int num = random.nextInt(10);
            sb.append(num);
        }
        return sb.toString();
    }
}
