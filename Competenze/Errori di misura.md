---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["measurement uncertainty", "incertezza di misura", "errore sistematico", "errore accidentale", "errore strumentale", "sensibilità dello strumento", "accuratezza", "semidispersione massima", "errore percentuale"]
tags: [competenza, area/fisica]
---

# Errori di misura

> Ogni misura va scritta come valore, incertezza e unità di misura; l'incertezza nasce da accuratezza, strumento, errori sistematici ed errori accidentali.

## Definizione / enunciato
Una misura tecnica si scrive $X=x\pm\delta x\,[X]$ (es. $L=(12.34\pm0.01)$ m). È impossibile una misura priva di errore, e una misura senza stima dell'errore non ha significato fisico. L'incertezza dipende da:
1. **accuratezza**: dipende dall'operatore, non quantificabile a priori;
2. **errore strumentale**: legato alla sensibilità dello strumento (minima variazione che riesce a segnalare);
3. **errore sistematico**: difetti del metodo o dell'apparato, agisce sempre nello stesso verso, non si riduce ripetendo le misure (va indicato a parte: $X=x\pm\delta x_{strum}\pm\delta x_{sist}$);
4. **errore accidentale**: valutazioni a volte per eccesso e a volte per difetto, si stima ripetendo la misura.

## Formule chiave
$$\text{errore relativo}=\frac{\delta x}{x_0},\qquad \text{errore percentuale}=\frac{\delta x}{x_0}\cdot100,\qquad \delta x=\frac{x_{max}-x_{min}}{2}\ \text{(semidispersione massima)}$$

## Intuizione
L'errore relativo misura la qualità della misura indipendentemente dall'unità: nel laboratorio del corso un errore relativo $\ge10\%$ indica una misura "rozza".

## Come si usa
Con poche misure si dà il valor medio con la semidispersione massima; se $x_{max}-x_{min}$ supera l'incertezza strumentale servono più misure e una valutazione statistica (media e deviazione standard).

## Nei corsi
- **Fisica 1** (triennale): lezione del 28/02/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Teoria_degli_Errori/LezioneFisica1_Dimensione_ErrorediMisura.pdf` (pp. 11-24); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Teoria_degli_Errori/Statistica_TeoremaLimiteCentrale.pdf` (p. 18).

## Prerequisiti
- Nessuno.

## Porta a
- [[Media e deviazione standard delle misure]]: stima statistica dell'errore accidentale
- [[Propagazione degli errori]]: errori sulle grandezze misurate direttamente

## Collegati
- [[Analisi dimensionale]]: una misura è valore, errore e unità
- [[Errore assoluto e relativo]]: stessa definizione di errore relativo, qui per misure fisiche
- [[Distribuzione normale degli errori]]: nasce dagli errori accidentali, non dai sistematici
