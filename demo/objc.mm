//---- @implementation section ----
@implementation Fraction
{
   int  numerator;
   int  denominator;
}

–(void) print
{
    NSLog (@"%i/%i", numerator, denominator);
}

–(void) setNumerator: (int) n
{
    numerator = n;
}

–(void) setDenominator: (int) d
{
    denominator = d;
}

@end

@protocol XYZPieChartViewDataSource
- (NSUInteger)numberOfSegments;
- (CGFloat)sizeOfSegmentAtIndex:(NSUInteger)segmentIndex;
@optional
- (NSString *)titleForSegmentAtIndex:(NSUInteger)segmentIndex;
- (BOOL)shouldExplodeSegmentAtIndex:(NSUInteger)segmentIndex;
@required
- (UIColor *)colorForSegmentAtIndex:(NSUInteger)segmentIndex;
@end

@interface Person : NSObject
 
@property NSString *firstName;
@property NSString *lastName;
 
@end
