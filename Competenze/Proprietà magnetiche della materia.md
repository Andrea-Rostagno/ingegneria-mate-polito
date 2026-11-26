---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["magnetic properties of matter", "diamagnetismo", "diamagnetism", "ferromagnetismo", "ferromagnetism", "antiferromagnetismo", "ferrimagnetismo", "legge di Curie magnetica", "isteresi magnetica", "domini magnetici"]
tags: [competenza, area/fisica]
---

# Proprietà magnetiche della materia

> Classificazione dei materiali secondo la risposta a un campo magnetico esterno: diamagnetici ($\chi_m<0$), paramagnetici ($\chi_m>0$, legge di Curie), ferromagnetici (risposta non lineare con isteresi), antiferromagnetici e ferrimagnetici.

## Definizione / enunciato
- **Diamagnetici** (es. H₂, N₂, Na, Cu, Hg): senza momenti di dipolo microscopici. Accendendo il campo, le cariche in moto acquistano una velocità angolare; il momento di dipolo indotto si oppone a $\vec B$, quindi $\vec M$ è antiparallelo al campo e $\chi_m<0$. Il diamagnetismo è presente in tutti i materiali, ma è mascherato in quelli con dipoli permanenti.
- **Paramagnetici** (O₂, Al, Ti, Pt): dipoli microscopici permanenti orientati a caso dall'agitazione termica, che il campo tende ad allineare. La magnetizzazione dipende dalla temperatura (legge di Curie).
- **Ferromagnetici** (Fe, Ni, Co): fortissimo allineamento sotto deboli campi; i dipoli si raggruppano in **domini** che si auto-allineano. Relazione non lineare tra $\vec M$ e $\vec H$ e **isteresi** (memoria della storia di magnetizzazione, curva bcdeb); dopo aver tolto il campo resta un allineamento residuo. Spiegabili solo con la meccanica quantistica.
- **Antiferromagnetici** (MnO, FeO, CoO): dipoli uguali orientati in modo ordinato ma opposto, magnetizzazione netta nulla.
- **Ferrimagnetici** o ferriti (MnOFe₂O₃, CoOFe₂O₃, NiOFe₂O₃): come gli antiferromagnetici, ma i dipoli nei due versi hanno momento diverso.

## Formule chiave
$$\vec\omega=-\frac{q}{massa}\vec B_0\ \text{(diamagnetismo)},\qquad \vec M=\chi_m\vec H,\ \chi_m<0$$
$$M=C\cdot\frac HT=C\cdot\frac{B_0}{\mu_0T},\qquad \chi_m=\frac CT\ \text{(legge di Curie)}$$
$$\vec B_M=\mu_0(\vec H+\vec M(\vec H))\ \text{(ferromagnetici)},\qquad \vec B_M=\mu_0(1+\chi_m)\vec H=\mu_r\vec B_0\ \text{(omogenei e isotropi)}$$

## Intuizione
Il diamagnetismo è una piccola "legge di Lenz" atomica: il moto ciclotronico indotto genera un momento opposto al campo. Il paramagnetismo è una competizione tra campo (che allinea) e temperatura (che disordina), da cui $\chi_m\propto1/T$, come per i dielettrici polari.

## Come si usa
Dal segno e dal valore di $\chi_m$ si classifica un materiale; per i ferromagnetici non si usa una $\chi_m$ costante ma la curva di isteresi $M(H)$.

## Nei corsi
- **Fisica 2** (triennale): lezione 27, seconda parte. Le slide usano per il diamagnetismo lo stesso conto del moto circolare della forza di Lorentz ($r=mv/qB$, frequenza ciclotronica). Fonti: `triennale/ANNO 2/fisica 2/lezioni/27.  LEZIONE.pdf` (pp. 10-21).

## Prerequisiti
- [[Magnetizzazione e campo magnetizzante]]: classificazione per segno e valore della suscettività
- [[Forza di Lorentz]]: diamagnetismo dalla frequenza ciclotronica indotta

## Porta a
- Nessuno.

## Collegati
- [[Configurazione elettronica]]: i momenti magnetici permanenti vengono dagli elettroni spaiati
