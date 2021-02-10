import org.gradle.api.tasks.Exec

buildDir = File(projectDir, "public")

tasks.register<Exec>("clean") {
    group = "NPM"
    description = "Clean public/build"

    commandLine("npm", "run", "clean")
}

tasks.register<Exec>("test") {
    group = "NPM"
    description = "Run tests"
    mustRunAfter("assemble")

    commandLine("npm", "test")
}

tasks.register<Exec>("assemble") {
    group = "NPM"
    description = "Assemble into public/build"

    commandLine("npm", "run", "assemble")
}

tasks.register("build") {
    group = "NPM"
    description = "Build into public/build"

    dependsOn("assemble", "test")
}
