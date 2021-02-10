package cash.bookkeeper

import io.ktor.application.Application
import io.ktor.application.install
import io.ktor.features.CallLogging
import io.ktor.features.DefaultHeaders
import io.ktor.http.content.resource
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.routing.Routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.jetty.Jetty

fun Application.module() {
    install(DefaultHeaders)
    install(CallLogging)

    install(Routing) {
        resource("/", "static/index.html")
        static {
            resources("static")
        }
    }
}

fun main() {
    val port = System.getenv("PORT")?.toInt() ?: 8080

    embeddedServer(
        factory = Jetty,
        port = port,
        module = { module() }
    ).start()
}
