#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .setup(|app| {
            let mut main_window = app.get_window("main").unwrap();
            main_window.emit("superlock://profile-name", std::env::var("USER").unwrap());
            main_window.emit("superlock://profile-image", &"/usr/share/pixmaps/faces/soccerball.png");
        })
        .run(context)
        .expect("error while running tauri application");
}
