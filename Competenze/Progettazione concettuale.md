---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [conceptual design, strategia ibrida, criteri di rappresentazione, qualità di uno schema concettuale, minimalità di uno schema concettuale]
tags: [competenza, area/informatica]
---

# Progettazione concettuale

> Fase che traduce i requisiti in uno schema ER: si individuano i concetti principali e li si raffina progressivamente, verificando correttezza, completezza, minimalità e leggibilità.

## Definizione / enunciato
Tra le strategie proposte la più efficace è **ibrida**: si individuano i concetti fondamentali (entità e relazioni importanti), poi si raffina progressivamente il progetto aggiungendo attributi, cardinalità, gerarchie, altre entità e relazioni. Se il problema è molto complesso lo si divide in sottoproblemi risolti separatamente e poi integrati.

Criteri generali:
- concetto con proprietà significative o esistenza autonoma → **entità**;
- concetto con struttura semplice senza proprietà rilevanti → **attributo** (eventualmente multivalore);
- concetti correlati → **relazione**;
- concetto che è caso particolare di un altro → **gerarchia**.

## Formule chiave
Qualità di uno schema concettuale:
- **correttezza**: costrutti appropriati, nessun errore sintattico o semantico;
- **completezza**: tutti i concetti di interesse rappresentati;
- **minimalità**: ogni specifica rappresentata una sola volta; ridondanze verificate e documentate;
- **leggibilità**.

## Intuizione
Prima lo scheletro, poi la carne: partire da tutti i dettagli fa perdere la struttura. Le verifiche di normalizzazione si possono applicare anche agli schemi ER, e uno schema ER ben fatto produce di norma schemi relazionali normalizzati.

## Come si usa
Caso svolto a lezione (prenotazione di esami medici in una ASL), passo per passo:
1. concetti principali: Paziente, Ospedale, Reparto, Personale, Esame, Laboratorio;
2. raffinamento: gerarchie del personale (medico, volontario) e degli esami (specialistico); attributi; Data di nascita ed Età (l'età è derivabile);
3. relazioni e cardinalità: Lavora in, Effettuato da, Ha (Reparto–Ospedale), Dispone di (Laboratorio–Ospedale) con identificatori esterni;
4. rappresentazione del tempo: Di servizio in storicizzata, Prenotazione come entità, ruolo del medico storicizzato.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Esempio_progettazione-concettuale.pdf` (pp. 14-16 strategia e qualità, pp. 18-129 esempio); `triennale/ANNO 3/base di dati/Normalizzazione-1.pdf` (p. 4).

## Prerequisiti
- [[Fasi della progettazione di una base di dati]]: è la prima fase
- [[Modello Entità-Relazione]]: modello in cui si scrive lo schema

## Porta a
- [[Ristrutturazione dello schema ER]]: lo schema concettuale è l'input della progettazione logica

## Collegati
- [[Generalizzazione nel modello ER]]: i casi particolari diventano gerarchie
- [[Gestione del tempo nello schema ER]]: passo finale del raffinamento
- [[Forma normale di Boyce-Codd]]: le verifiche di normalizzazione valgono anche sugli schemi ER
