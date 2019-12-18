package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func (w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Welcome to my website!")
    })

    fs := http.FileServer(http.Dir("static/"))
    http.Handle("/static/", http.StripPrefix("/static/", fs))

    http.ListenAndServe(":80", nil)
}

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

var (
	// key must be 16, 24 or 32 bytes long (AES-128, AES-192 or AES-256)
	key = []byte("super-secret-key")
	store = sessions.NewCookieStore(key)
)

type Middleware func(http.HandlerFunc) http.HandlerFunc

// Logging logs all requests with its path and the time it took to process
func Logging() Middleware {

	// Create a new Middleware
	return func(f http.HandlerFunc) http.HandlerFunc {

			// Define the http.HandlerFunc
			return func(w http.ResponseWriter, r *http.Request) {

					// Do middleware things
					start := time.Now()
					defer func() { log.Println(r.URL.Path, time.Since(start)) }()

					// Call the next middleware/handler in chain
					f(w, r)
			}
	}
}

// Method ensures that url can only be requested with a specific method, else returns a 400 Bad Request
func Method(m string) Middleware {

	// Create a new Middleware
	return func(f http.HandlerFunc) http.HandlerFunc {

			// Define the http.HandlerFunc
			return func(w http.ResponseWriter, r *http.Request) {

					// Do middleware things
					if r.Method != m {
							http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
							return
					}

					// Call the next middleware/handler in chain
					f(w, r)
			}
	}
}

// Chain applies middlewares to a http.HandlerFunc
func Chain(f http.HandlerFunc, middlewares ...Middleware) http.HandlerFunc {
	for _, m := range middlewares {
			f = m(f)
	}
	return f
}

func Hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "hello world")
}

func main() {
	http.HandleFunc("/", Chain(Hello, Method("GET"), Logging()))
	http.ListenAndServe(":8080", nil)
}