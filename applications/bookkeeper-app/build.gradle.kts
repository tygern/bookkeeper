import org.gradle.api.file.DuplicatesStrategy.INCLUDE

val ktorVersion: String by extra
val logbackVersion: String by extra

dependencies {
    implementation("io.ktor:ktor-server-jetty:$ktorVersion")

    implementation("ch.qos.logback:logback-classic:$logbackVersion")
}

tasks {
    processResources {
        val frontend = project(":components:frontend")

        dependsOn(frontend.tasks.findByName("assemble"))
        from(frontend.buildDir) {
            into("static")
        }
    }

    jar {
        manifest {
            attributes("Main-Class" to "cash.bookkeeper.AppKt")
        }

        duplicatesStrategy = INCLUDE

        from({
            configurations.compileClasspath.get()
                .filter { it.name.endsWith("jar") }
                .map {
                    zipTree(it)
                }
        })
    }
}
