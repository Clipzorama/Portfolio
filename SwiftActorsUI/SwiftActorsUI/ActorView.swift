//
//  ActorView.swift
//  SwiftActorsUI
//
//  Created by Chrision Wynaar on 11/13/22.
//

import SwiftUI

struct ActorView: View {
    
    @StateObject var replies : Model
    @State var bio : ActorBio!
    
    

    var body: some View {
        VStack {
            HStack {
                
                if let d = bio {
                    Text(d.name)
                    
                }
            }
            
            HStack {
                if let image = bio {
                    AsyncImage(url: URL(string: image.image)) { image in
                        image.resizable()
                    } placeholder: {
                        ProgressView()
                    }
                    .frame(width: 160, height: 160) // Image goes here
                    // image size makes it perfectly alligned in the middle. Important to put .frame when modifying image.
                }
            }
            
            Spacer()
            
            HStack {
                //code for the summary and some modifications to make it blue and alligned.
                if let d = bio {
                    Text(d.summary).foregroundColor(.blue).multilineTextAlignment(.center)

                }
            }
            
            if let known = bio {
                List{
                    ForEach(known.knownFor, id: \.self){ item in HStack{
                        HStack{
            //title and role on the same line... Of tableview (List)
                            Text(item.title)
                            Spacer()
                            Text(item.role)
                            
                        }
                    }
                    }
                    
                }
            }
            
            Spacer()

        }.task {
            bio = await replies.getActorDetails(Aname: replies.actor.id)
        }
    }

}
