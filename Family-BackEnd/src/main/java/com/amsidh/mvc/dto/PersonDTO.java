package com.amsidh.mvc.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class PersonDTO {
	private Long personId;
	private String personName;
	private String personAddress;
}
