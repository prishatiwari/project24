class Paper {
	constructor( x, y )
	{
		var options = {
			"isStatic": false,
			"restitution": 0.3,
			"friction": 0.5,
			"density": 1.2
		}
		this.body = Matter.Bodies.circle( x, y, 50, options );
		this.diameter = 50;
		this.radius = this.diameter/2;
		World.add( world, this.body );
	}
	display()
	{
		var pos = this.body.position;
//		pos.x = mouseX;
//		pos.y = mouseY;
		
		push();
		translate( pos.x, pos.y );
		strokeWeight( 1 );
		stroke( 'white' );
		fill( 'white' );
		ellipseMode( CENTER );
		ellipse( 0, 0, this.radius, this.radius );
		pop();
		
	}
}