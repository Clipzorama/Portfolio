//
//  ContentView.swift
//  SwiftActorsUI
//
//  Created by Chrision Wynaar on 11/7/22.
//

import SwiftUI

struct ContentView: View {
    
    @State var textSearch: String = ""
    @StateObject var replies : Model = Model()
    @State var goToItem = false
    var body: some View {
        
        //its important to put a navigationview when youre planning to go from one view to another
        NavigationView {
        VStack {
            
            // next view to the next interface
            NavigationLink(destination: SeriesView(replies: replies), isActive: $goToItem) {EmptyView()}
            
            /* isActive ---> executes when goToItem is true. Its becomes true on (.onTapGesture) */
            
            
            HStack {
                TextField("Search Here...", text: $textSearch)
                    .textFieldStyle(.roundedBorder)
            }
            
            HStack {
                Button("Search Movies") {
                    Task {
                        replies.reply = await replies.doSeriesSearch(Sname: textSearch)
                    }
                    ///
                }.buttonStyle(.bordered).padding()
                
                Button("Search Series") {
                    Task {
                           replies.reply = await replies.doMoviesSearch(Mname: textSearch)
                    }
                
                    ///
                }
                
                
                .buttonStyle(.bordered).padding()
                
                
            }
                           
            .padding()
            // spacer code brings everything up so nothing is forced in the center of interface.
            Spacer()
            
            if let sr = replies.reply {
            List{
                ForEach(sr.results, id: \.self){ item in HStack{
                    Text(item.title).onTapGesture {
                        
                        replies.item = item
                        
                        // on TapGesture, goToItem turns true which executes NavigationLink
                        
                        goToItem = true
                    }
                         }
                    
                }
                }
            }
        }
    }
                           }
                           
                           }
                           
    struct ContentView_Previews: PreviewProvider {
        static var previews: some View {
            ContentView()
        }
    }
                           
