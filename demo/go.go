package main

import (
    "fmt"
    "net/http"
)

const Pi float64 = 3.14159265358979323846
chan<- float64 foo

make(chan int, 100)

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

type ReadWriter interface {
	Read(b Buffer) bool
	Write(b Buffer) bool
}

type File interface {
	ReadWriter  // same as adding the methods of ReadWriter
	Locker      // same as adding the methods of Locker
	Close()
}

interface {
	Read([]byte) (int, error)
	Write([]byte) (int, error)
	Close() error
}

map[string]int

struct {
	x, y int
	u float32
	_ float32  // padding
	A *[]int
	F func()
}
