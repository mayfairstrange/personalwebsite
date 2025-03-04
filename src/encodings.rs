use wasm_bindgen::prelude::*;



#[wasm_bindgen]
pub fn to_base64(input: &str) -> String {
   use base64::{engine::general_purpose::URL_SAFE, Engine as _};
   URL_SAFE.encode(input)
}

#[wasm_bindgen]
pub fn from_base64(input: &str) -> String {
   use base64::{engine::general_purpose::URL_SAFE, Engine as _};
   String::from_utf8(URL_SAFE.decode(input).unwrap()).expect("Input bytes should be UTF-8")
}