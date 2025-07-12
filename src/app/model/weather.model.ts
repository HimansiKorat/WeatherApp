export class WeatherResponse {
  public current_condition!: CurrentCondition[];
  public nearest_area!: NearestArea[];
  public weather!: WeatherForecast[];
}

export class CurrentCondition {
  public FeelsLikeC!: string;
  public humidity!: string;
  public temp_C!: string;
  public weatherDesc!: ValueObject[];
  public windspeedKmph!: string;
}

export class NearestArea {
  public areaName!: ValueObject[];
  public region!: ValueObject[];
  public country!: ValueObject[];
}

export class WeatherForecast {
  public date!: string;
  public maxtempC!: string;
  public mintempC!: string;
}

export class ValueObject {
  public value!: string;
}
