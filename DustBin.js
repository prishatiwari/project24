class DustBin
{
	constructor( x, y )
	{
		var options = {
			isStatic: true
		}
		this.body = Matter.Bodies.rectangle(x,y, 200, 100 );
		this.width = 200;
		this.height = 100;
		World.add( world, this.body );
	}
	display()
	{
		var pos = this.body.position;
		
		push();
		translate( pos.x, pos.y );
		fill( 'red' );
		strokeWeight( 0 );
		rectMode( CENTER );
		rect( 0, 0, this.width, 20 );
		rect( -this.width/2, -this.height/2 + 10, 20, this.height );
		rect( this.width/2, -this.height/2 + 10, 20, this.height );
		pop();
		
	}
}