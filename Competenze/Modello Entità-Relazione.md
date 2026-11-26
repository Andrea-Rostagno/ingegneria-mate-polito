---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [modello E-R, modello ER, Entity-Relationship, schema ER, entità, occorrenza di un'entità, relazione ER, associazione, attributo ER, attributo composto, relazione ternaria, relazione ricorsiva ER, ruoli, UML ed ER]
tags: [competenza, area/informatica]
---

# Modello Entità-Relazione

> Il modello concettuale più diffuso: descrive con un formalismo grafico entità, relazioni tra entità e attributi, indipendentemente dal modello logico che si sceglierà.

## Definizione / enunciato
Costrutti principali: entità, relazioni, attributi, identificatori, generalizzazioni e sottoinsiemi.
- **Entità**: classe di oggetti del mondo reale (persone, cose, eventi) con proprietà comuni ed esistenza autonoma (dipendente, studente, articolo). Un'**occorrenza** è un oggetto della classe.
- **Relazione** (o associazione): legame logico tra due o più entità (esame tra studente e corso, residenza tra persona e comune); da non confondere con la relazione del modello relazionale. Un'occorrenza è una n-upla di occorrenze di entità, una per entità coinvolta, e **non vi possono essere n-uple identiche**.
- **Attributo**: proprietà elementare di un'entità o di una relazione (cognome di Studente, voto di Esame), con un dominio. **Attributo composto**: raggruppamento di attributi affini.

## Formule chiave
- **Relazione ternaria**: con la binaria Esame(Studente, Corso) uno studente non può sostenere lo stesso esame più di una volta; aggiungendo l'entità Tempo (Esame tra Studente, Corso, Tempo) lo può fare in momenti diversi: $(s_1, c_1, t_1)$, $(s_1, c_1, t_2)$.
- Se un'entità partecipa a una relazione n-aria con cardinalità massima 1, si può eliminare la n-aria e legarla alle altre con relazioni binarie.
- **Relazione ricorsiva**: relazione di un'entità con sé stessa; se non è simmetrica bisogna definire i due **ruoli** (superiore e sottoposto nell'organigramma).

## Intuizione
L'ER fissa *cosa* rappresentare prima di decidere *come*: il vincolo "niente n-uple identiche" spiega perché per ripetere un evento serve un'entità in più (il tempo). Le relazioni non hanno identificatori.

## Come si usa
Criteri del caso ASL: un concetto con proprietà significative o esistenza autonoma è un'**entità**; un concetto semplice senza proprietà rilevanti è un **attributo**; concetti correlati danno una **relazione**; un caso particolare di un altro concetto dà una **gerarchia**. Confronto con UML: il diagramma delle classi modella un'applicazione (struttura e comportamento) e può essere adattato alla progettazione concettuale, ma non ha una notazione standard per gli identificatori, ammette note e verso di navigazione (irrilevante per i dati).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Progettazione_ER-1.pdf` (pp. 25-51, 57, 83-84; diagrammi solo come immagini); `triennale/ANNO 3/base di dati/Esempio_progettazione-concettuale.pdf` (p. 15).

## Prerequisiti
- [[Fasi della progettazione di una base di dati]]: è il modello della fase concettuale

## Porta a
- [[Cardinalità nel modello ER]]: quante volte un'occorrenza partecipa
- [[Identificatore ed entità debole]]: identificare le occorrenze
- [[Generalizzazione nel modello ER]]: gerarchie tra entità
- [[Documentazione di schemi ER]]: ciò che il diagramma non esprime
- [[Gestione del tempo nello schema ER]]: eventi e storia nel tempo
- [[Progettazione concettuale]]: strategia per costruire lo schema

## Collegati
- [[Modello relazionale]]: modello logico di arrivo; "relazione" ha un altro significato
