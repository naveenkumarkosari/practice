package main

import (
	middleware "event-streams/middlewares"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	r.Use(middleware.Headersmiddleware())

	r.GET("/streams", func(c *gin.Context) {
		// SSE headers
		c.Writer.Header().Set("Content-Type", "text/event-stream")
		c.Writer.Header().Set("Cache-Control", "no-cache")
		c.Writer.Header().Set("Connection", "keep-alive")
		c.Writer.Header().Set("X-Accel-Buffering", "no")

		flusher, ok := c.Writer.(http.Flusher)
		if !ok {
			c.AbortWithStatusJSON(500, gin.H{"error": "streaming unsupported"})
			return
		}

		var token []string
		for i := range 1000 {
			token = append(token, strconv.Itoa(i))
		}
		fmt.Fprintf(c.Writer, ": connected\n\n")
		flusher.Flush()
		for _, t := range token {
			fmt.Fprintf(c.Writer, "event: number\n")
			fmt.Fprintf(c.Writer, "data: %s\n\n", t)
			flusher.Flush()
			time.Sleep(200 * time.Millisecond)
		}
	})

	fmt.Printf("🚀 Server starting on port %v\n", "8080")
	if err := r.Run(":8080"); err != nil {
		fmt.Printf("❌ Failed to start server: %v\n", err)
	}
}
