//
//  SeriesView.swift
//  SwiftActorsUI
//
//  Created by Chrision Wynaar on 11/13/22.
//

import SwiftUI

struct SeriesView: View {
    
    @StateObject var replies : Model
    @State var goToItem = false
    //connect variable to series data to get searched results
    @State var data : SeriesData!


    var body: some View {
        // remember that everything goes within a VStack(Vertical allignment) and then implement HStack brackets to go within the lines.
        VStack {
            NavigationLink(destination: ActorView (replies:replies) , isActive: $goToItem) {EmptyView()}
            HStack {
                if let s = data {
                    Text(s.title)
                }
            }
            
            HStack {
                if let s = data {
                    Text(s.plot)
                }
            }
            if let ar = data {
                List{
                    ForEach(ar.actorList, id: \.self){ item in HStack{
                        HStack{
                            Text(item.name)
                            Spacer()
                            Text(item.asCharacter)
                            //text
                        }.onTapGesture {
                            // Had to make a new variable in model class to use actor.
                            replies.actor = item
                            goToItem = true
                        }
                    }
                    }
                    
                }
            }
        }
        //task necessary to execute what 
        .task {
            data = await replies.getDetailsSeries(series: replies.item.id)
        }
    }
        }
        

    
    
    

