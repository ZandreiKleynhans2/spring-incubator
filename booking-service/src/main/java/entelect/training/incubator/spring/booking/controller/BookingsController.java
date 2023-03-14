package entelect.training.incubator.spring.booking.controller;

import entelect.training.incubator.spring.booking.model.Booking;
import entelect.training.incubator.spring.booking.model.BookingSearchRequest;
import entelect.training.incubator.spring.booking.service.BookingsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("bookings")
public class BookingsController {

    private final Logger LOGGER = LoggerFactory.getLogger(BookingsController.class);

    private final BookingsService bookingsService;

    public BookingsController(BookingsService bookingsService){this.bookingsService = bookingsService;}

    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody Booking booking){
        LOGGER.info("Processing booking creation request for booking={}", booking);

        final Booking savedBooking = bookingsService.createBooking(booking);

        LOGGER.trace("Booking created");
        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getBookings() {
        LOGGER.info("Fetching all bookings");

        List<Booking> bookings = bookingsService.getBookings();

        if (!bookings.isEmpty()) {
            LOGGER.trace("Found bookings");
            return new ResponseEntity<>(bookings, HttpStatus.OK);
        }

        LOGGER.info("No bookings could be found");
        return ResponseEntity.notFound().build();
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getBookingById(@PathVariable Integer id) {
        LOGGER.info("Processing booking search request for booking id={}", id);
        Booking booking = this.bookingsService.getBooking(id);

        if (booking != null){
            LOGGER.trace("Found booking");
            return new ResponseEntity<>(booking, HttpStatus.OK);
        }

        LOGGER.trace("Booking not found");
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/search")
    public ResponseEntity<?> searchbookings(@RequestBody BookingSearchRequest searchRequest) {
        LOGGER.info("Processing booking search request for request {}", searchRequest);

        ArrayList<Booking> booking= bookingsService.searchBookings(searchRequest);

        if (booking != null) {
            return new ResponseEntity<>(booking, HttpStatus.OK);
        }

        LOGGER.trace("Booking not found");
        return ResponseEntity.notFound().build();
    }






}
