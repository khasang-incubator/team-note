package io.khasang.teamnote.entity;

import javax.persistence.*;

/**
 * @author gothmog on 06.08.2017.
 */
@Entity
@Table(name = "task_statuses")
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "status_id")
    private Long id;

    @Column(name = "status_name")
    private String name;

    @Column(name = "description")
    private String description;

    public Status() {
    }

    public Status(String name) {
        this.name = name;
    }

    public Status(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}